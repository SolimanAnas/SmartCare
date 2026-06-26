#!/usr/bin/env python3
"""Assemble TOC section files into content/cX.js chapters.

For each chapter c6–c10, reads TOC/cXsY-cXz.js section files and merges
the section objects into content/cX.js with window.CPG_DATA format.
"""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
TOC_DIR = os.path.join(ROOT, "TOC")

CHAPTERS = {
    "c6": {
        "title": "Trauma Emergencies",
        "icon": "bone",
        "files": ["c6s1-c6s4.js", "c6s5-c6s8.js", "c6s9-c6s11.js"],
    },
    "c7": {
        "title": "Special Populations",
        "icon": "baby",
        "files": ["c7s1-c7s4.js", "c7s5-c7s8.js"],
    },
    "c8": {
        "title": "Environmental & Disaster",
        "icon": "cloud-lightning",
        "files": ["c8s1-c8s3.js", "c8s4-c8s6.js", "c8s7-c8s9.js"],
    },
    "c9": {
        "title": "Emergency Pharmacology",
        "icon": "flask-conical",
        "files": ["c9s1-c9s4.js", "c9s5-c9s7.js"],
    },
    "c10": {
        "title": "Clinical Procedures & Skills",
        "icon": "wrench",
        "files": ["c10s1-c10s4.js", "c10s5-c10s8.js"],
    },
}


def extract_sections(filepath: str) -> str:
    """Extract section objects from a TOC section file.

    The file has the pattern:
        window.CPG_SECTIONS_XXX = [
        ... section objects ...
        ];
        console.log(...)

    Returns the joined section source (comma-separated objects).
    """
    with open(filepath, encoding="utf-8") as f:
        content = f.read()

    # Find the array content between [ and ];
    # Match the first [ after 'window.CPG_SECTIONS' and the last ]; before console.log
    m = re.search(r'window\.CPG_SECTIONS(?:_\w*)?\s*=\s*\[', content)
    if not m:
        raise ValueError(f"Cannot find CPG_SECTIONS in {filepath}")

    start = m.end()  # position after [
    # Find the closing ]; before console.log
    # Match ]; optionally followed by whitespace then console.log or end-of-string
    end_m = re.search(r'\];(?:\s*console\.log|\s*$)', content)
    if not end_m:
        # Fallback: find the last ]; in the file
        last = content.rfind("];")
        if last == -1:
            raise ValueError(f"Cannot find closing ]; in {filepath}")
        end_start = last
    else:
        end_start = end_m.start()

    sections_text = content[start:end_start].strip()

    # Remove trailing comma if present (avoid empty-last-element syntax error)
    if sections_text.endswith(","):
        sections_text = sections_text[:-1].rstrip()

    # Check for leading comma too
    if sections_text.startswith(","):
        sections_text = sections_text[1:].lstrip()

    return sections_text


def assemble(cid: str, info: dict) -> str:
    """Assemble a complete chapter JS file."""
    num = cid[1:]  # "6".."10"
    title = info["title"]

    header = f"/* ========== Chapter {num} \u2013 {title} ========== */\n"
    header += "window.CPG_DATA = {\n"
    header += f'    id: "{cid}",\n'
    header += f'    title: "{title}",\n'
    header += f'    shortTitle: "{num}. {title}",\n'
    header += "    sections: [\n"

    footer = "    ]\n};\n"

    all_sections = []
    for fname in info["files"]:
        fpath = os.path.join(TOC_DIR, fname)
        if not os.path.exists(fpath):
            print(f"  WARNING: {fpath} not found, skipping")
            continue
        secs = extract_sections(fpath)
        all_sections.append(secs)
        print(f"  {fname}: extracted sections")

    body = ",\n".join(all_sections)
    # Indent each line of body
    indented = "\n".join("        " + line if line.strip() else line
                         for line in body.split("\n"))

    return header + indented + "\n" + footer


def main():
    for cid, info in CHAPTERS.items():
        out = CONTENT + f"/{cid}.js"
        print(f"\n=== Assembling {cid} ({info['title']}) ===")
        assembled = assemble(cid, info)
        with open(out, "w", encoding="utf-8") as f:
            f.write(assembled)
        size_kb = len(assembled) / 1024
        line_count = assembled.count("\n") + 1
        print(f"  -> {out} ({size_kb:.0f} KB, {line_count} lines)")


if __name__ == "__main__":
    main()
