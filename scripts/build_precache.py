#!/usr/bin/env python3
"""Generate precache-manifest.js for sw.js from the actual repo contents.

Problem this replaces: sw.js used to hand-list every file worth pre-caching.
That list silently drifted from reality — new pages (pages/GCS.html,
pages/ems-tools.html), and even pages/terms.html, were never added, so the
"study fully offline" promise quietly failed for them. This script derives
the list from the filesystem instead, using the same inclusion rules a human
was applying by hand (app shell, every chapter page, every standalone tool
page, split-chapter metadata + first section, but NOT the heavy stuff that's
meant to be cache-first-on-demand: images/, algorithms/, splash/, and the
full legacy chapter bundles that a split chapter's meta.js has superseded).

Usage: python3 scripts/build_precache.py
Run this after adding/removing/renaming any file the rules below cover —
CI's `precache-manifest-check` job (.github/workflows/ci.yml) fails the
build if the committed manifest doesn't match what this script would
generate, so drift can't ship silently again.
"""
import hashlib
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(ROOT, "precache-manifest.js")

# Explicit core app-shell files — small, load-bearing, not safely inferable
# from a directory glob (e.g. icons/ has 8 icon sizes but only one belongs
# in the eager precache; the rest are cache-first on first request).
CORE_FILES = [
    "index.html",
    "resume.html",
    "styles.css",
    "app.js",
    "manifest.json",
    "icons/icon.png",
    "icons/sprite.svg",
    "images/image-01.png",
    "courses/itls/index.html",
    "courses/itls/data/bundle.js",
    "courses/bls/index.html",
    "courses/bls/data/bundle.js",
    "courses/acls/index.html",
    "courses/acls/data/bundle.js",
    "courses/pals/index.html",
    "courses/pals/data/bundle.js",
    "courses/bdls/index.html",
    "courses/bdls/data/bundle.js",
    "courses/empact/index.html",
    "courses/empact/data/bundle.js",
    "courses/pepp/index.html",
    "courses/pepp/data/bundle.js",
]

GLOB_DIRS = [
    ("chapters", (".html",)),
    ("pages", (".html", ".js", ".json", ".css")),
    ("fonts", (".css", ".woff2")),
]

# Walked recursively (vendored packages and per-exam src/ subdirectories
# keep their own directory layout, e.g. vendor/fontawesome/css/ +
# vendor/fontawesome/webfonts/, or src/ACLS/acls.json, src/prometric/*).
RECURSIVE_GLOB_DIRS = [
    ("vendor", (".mjs", ".js", ".css", ".woff2")),
    # src/ holds both top-level modules (theme.js, render-state.js) and,
    # per subdirectory, one question bank + engine per exam type — all of
    # it is core offline content, not lazily-fetched extras, so it's walked
    # recursively rather than globbed one level deep like the others above.
    ("src", (".js", ".json", ".css", ".html")),
]


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def collect_content_files():
    """content/: *.meta.js + any full bundle that ISN'T superseded by a
    meta.js (c0.js, c-index.js, m1-38.js), plus each split chapter's first
    section JSON — so a chapter works offline before any tab is tapped."""
    content_dir = os.path.join(ROOT, "content")
    out = []
    entries = sorted(os.listdir(content_dir))
    meta_stems = {f[: -len(".meta.js")] for f in entries if f.endswith(".meta.js")}

    for f in entries:
        full = os.path.join(content_dir, f)
        if os.path.isdir(full):
            continue
        if f.endswith(".meta.js"):
            out.append(rel(full))
        elif f.endswith(".js"):
            stem = f[: -len(".js")]
            if stem not in meta_stems:
                out.append(rel(full))  # not split — the only copy, must precache

    for stem in sorted(meta_stems):
        section_dir = os.path.join(content_dir, stem)
        first_section = os.path.join(section_dir, stem + "s1.json")
        if os.path.isfile(first_section):
            out.append(rel(first_section))

    return out


def collect_globs():
    out = []
    for dirname, exts in GLOB_DIRS:
        dirpath = os.path.join(ROOT, dirname)
        if not os.path.isdir(dirpath):
            continue
        for f in sorted(os.listdir(dirpath)):
            full = os.path.join(dirpath, f)
            if os.path.isfile(full) and f.endswith(exts):
                out.append(rel(full))
    for dirname, exts in RECURSIVE_GLOB_DIRS:
        dirpath = os.path.join(ROOT, dirname)
        if not os.path.isdir(dirpath):
            continue
        for root, _dirs, files in sorted(os.walk(dirpath)):
            for f in sorted(files):
                if f.endswith(exts):
                    out.append(rel(os.path.join(root, f)))
    return out


def build_list():
    files = ["./"] + list(CORE_FILES) + collect_globs() + collect_content_files()
    # De-dupe while preserving first-seen order (CORE_FILES takes priority).
    seen = set()
    ordered = []
    for f in files:
        if f not in seen:
            seen.add(f)
            ordered.append(f)
    return ordered


def content_hash(file_list):
    h = hashlib.sha1(usedforsecurity=False)  # cache-busting fingerprint, not a security use
    for f in file_list:
        if f == "./":
            continue
        path = os.path.join(ROOT, f)
        h.update(f.encode("utf-8"))
        with open(path, "rb") as fh:
            # Normalize CRLF → LF so the hash is identical regardless of
            # the platform's line-ending convention (Windows CRLF vs Linux LF).
            h.update(fh.read().replace(b"\r\n", b"\n"))
    return h.hexdigest()[:10]


def main():
    file_list = build_list()
    for f in file_list:
        if f != "./" and not os.path.isfile(os.path.join(ROOT, f)):
            raise SystemExit(f"precache entry does not exist on disk: {f}")

    version = content_hash(file_list)
    lines = [
        "// AUTO-GENERATED by scripts/build_precache.py — do not edit by hand.",
        "// Regenerate: python3 scripts/build_precache.py",
        "self.__PRECACHE = [",
    ]
    lines += ["  " + repr(f).replace("'", "\"") + "," for f in file_list]
    lines += [
        "];",
        "self.__PRECACHE_VERSION = " + repr(version).replace("'", "\"") + ";",
        "",
    ]
    with open(OUT_PATH, "w", encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(lines))
    print(f"wrote {rel(OUT_PATH)}: {len(file_list)} entries, version {version}")


if __name__ == "__main__":
    main()
