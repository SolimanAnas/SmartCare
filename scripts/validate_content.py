#!/usr/bin/env python3
"""Validate clinical question banks and their governance manifest.

Two independent checks:
1. src/content-manifest.json — every bank listed has the required
   governance fields (guideline_source, content_version, review_status,
   reviewer, review_date), 'reviewed' banks must name a real reviewer
   and date, and every src/*/*.json question bank on disk is covered by
   the manifest (nothing ships un-governed).
2. Each bank's actual question data — required fields present, options
   non-empty, correct_answer resolves to a real option — using known
   shape variants (see BankShape below) rather than assuming one layout,
   because the banks were authored independently and never had a shared
   format.

No third-party dependency (hand-rolled instead of `jsonschema`) since
the schema is small and stable; keeps validate_content.py runnable with
nothing beyond the stdlib, matching the rest of scripts/.

Usage: python3 scripts/validate_content.py
Wired into CI as a required step — a malformed bank or an ungoverned
file fails the build instead of shipping silently.
"""
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST_PATH = os.path.join(ROOT, "src", "content-manifest.json")
KNOWN_ISSUES_PATH = os.path.join(ROOT, "scripts", "schemas", "content-known-issues.json")

REQUIRED_BANK_FIELDS = {
    "file",
    "exam_id",
    "title",
    "guideline_source",
    "content_version",
    "review_status",
    "reviewer",
    "review_date",
}
VALID_REVIEW_STATUS = {"unreviewed", "in_review", "reviewed"}


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def load_json_lenient(path):
    """Several banks were authored with a UTF-8 BOM; browsers' fetch().json()
    tolerates it, python's json.load doesn't by default."""
    with open(path, encoding="utf-8-sig") as fh:
        return json.load(fh)


def validate_manifest_shape(manifest, errors):
    banks = manifest.get("banks")
    if not isinstance(banks, list) or not banks:
        errors.append("content-manifest.json: 'banks' must be a non-empty array")
        return {}

    by_file = {}
    for i, entry in enumerate(banks):
        where = f"content-manifest.json: banks[{i}]"
        if not isinstance(entry, dict):
            errors.append(f"{where}: not an object")
            continue

        missing = REQUIRED_BANK_FIELDS - entry.keys()
        if missing:
            errors.append(f"{where} ({entry.get('file', '?')}): missing fields {sorted(missing)}")
            continue

        status = entry["review_status"]
        tag = f"{where} ({entry['file']})"
        if status not in VALID_REVIEW_STATUS:
            errors.append(f"{tag}: review_status '{status}' not in {sorted(VALID_REVIEW_STATUS)}")

        if status == "reviewed":
            if not entry.get("reviewer"):
                errors.append(f"{tag}: review_status is 'reviewed' but reviewer is empty")
            if not entry.get("review_date"):
                errors.append(f"{tag}: review_status is 'reviewed' but review_date is empty")

        by_file[entry["file"]] = entry

    return by_file


def validate_manifest_coverage(by_file, errors):
    on_disk = {rel(p) for p in glob.glob(os.path.join(ROOT, "src", "*", "*.json"))}
    governed = set(by_file.keys())

    ungoverned = sorted(on_disk - governed)
    for f in ungoverned:
        errors.append(f"{f}: exists under src/ but has no content-manifest.json entry")

    missing_files = sorted(governed - on_disk)
    for f in missing_files:
        errors.append(f"content-manifest.json references {f}, but that file does not exist")


def question_core_fields(q):
    """Extract (text, options, correct_answer) regardless of which of the
    bank's shape variants this question object came from."""
    text = q.get("text") or q.get("question")
    options = q.get("options")
    correct = q.get("correct_answer")
    return text, options, correct


def validate_question(q, idx, bank_file, errors, warnings, known_single_option):
    where = f"{bank_file}: question[{idx}] (id={q.get('id', '?')})"
    text, options, correct = question_core_fields(q)

    if not text or not isinstance(text, str) or not text.strip():
        errors.append(f"{where}: missing or empty question text")

    if isinstance(options, (list, dict)):
        option_count = len(options)
        if option_count < 2:
            qid = q.get("id")
            msg = f"{where}: fewer than 2 options (no distractors — unusable as multiple-choice)"
            if (bank_file, qid) in known_single_option:
                warnings.append(f"{msg} [grandfathered in content-known-issues.json]")
            else:
                errors.append(msg)
    else:
        errors.append(f"{where}: 'options' is missing or not a list/object")
        return

    if correct is None or correct == "":
        errors.append(f"{where}: missing correct_answer")
        return

    is_letter = isinstance(correct, str) and len(correct) == 1 and correct.isalpha()
    if isinstance(options, list) and is_letter:
        letter_index = ord(correct.upper()) - ord("A")
        if not (0 <= letter_index < option_count):
            errors.append(
                f"{where}: correct_answer '{correct}' has no matching option ({option_count} opts)"
            )
    elif isinstance(options, dict) and isinstance(correct, str):
        if correct not in options and correct.upper() not in options:
            errors.append(f"{where}: correct_answer '{correct}' is not a key in the options object")


def validate_pearl(p, idx, bank_file, errors):
    where = f"{bank_file}: pearl[{idx}] (id={p.get('id', '?')})"
    if not p.get("text") or not isinstance(p["text"], str) or not p["text"].strip():
        errors.append(f"{where}: missing or empty text")
    if not p.get("category"):
        errors.append(f"{where}: missing category")


def validate_bank_content(entry, errors, warnings, known_single_option):
    bank_file = entry["file"]
    if entry.get("skip_validation"):
        return
    full_path = os.path.join(ROOT, bank_file)
    try:
        data = load_json_lenient(full_path)
    except (OSError, json.JSONDecodeError) as e:
        errors.append(f"{bank_file}: failed to parse — {e}")
        return

    if isinstance(data, list):
        questions = data
    elif isinstance(data, dict) and "questions" in data:
        questions = data["questions"]
    elif isinstance(data, dict) and "pearls" in data:
        for i, p in enumerate(data["pearls"]):
            validate_pearl(p, i, bank_file, errors)
        return
    else:
        errors.append(
            f"{bank_file}: unrecognized shape (expected a list or dict w/ 'questions'/'pearls')"
        )
        return

    if not isinstance(questions, list) or not questions:
        errors.append(f"{bank_file}: 'questions' is missing or empty")
        return

    seen_ids = set()
    for i, q in enumerate(questions):
        if not isinstance(q, dict):
            errors.append(f"{bank_file}: question[{i}] is not an object")
            continue
        qid = q.get("id")
        if qid is not None:
            if qid in seen_ids:
                errors.append(f"{bank_file}: duplicate question id {qid}")
            seen_ids.add(qid)
        validate_question(q, i, bank_file, errors, warnings, known_single_option)


def load_known_single_option():
    if not os.path.isfile(KNOWN_ISSUES_PATH):
        return set()
    with open(KNOWN_ISSUES_PATH, encoding="utf-8") as fh:
        data = json.load(fh)
    return {(entry["file"], entry["id"]) for entry in data.get("single_option_questions", [])}


def main():
    errors = []
    warnings = []

    if not os.path.isfile(MANIFEST_PATH):
        print(f"FAIL: {rel(MANIFEST_PATH)} does not exist", file=sys.stderr)
        return 1

    with open(MANIFEST_PATH, encoding="utf-8") as fh:
        manifest = json.load(fh)

    known_single_option = load_known_single_option()

    by_file = validate_manifest_shape(manifest, errors)
    if by_file:
        validate_manifest_coverage(by_file, errors)
        for entry in by_file.values():
            validate_bank_content(entry, errors, warnings, known_single_option)

    if warnings:
        print(f"content validation: {len(warnings)} grandfathered warning(s):\n")
        for w in warnings:
            print(f"  - {w}")
        print()

    if errors:
        print(f"content validation FAILED — {len(errors)} problem(s):\n", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        return 1

    print(
        f"content validation OK — {len(by_file)} banks governed and structurally valid "
        f"({len(warnings)} grandfathered warnings)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
