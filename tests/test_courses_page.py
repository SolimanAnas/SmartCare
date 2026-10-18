"""pages/courses.html progress bars divide chapters viewed by a hard-coded
chapter count per reviewer (REVIEWER_LINKS[...].chapters). Keep those counts
in sync with each reviewer's manifest so a bar can't stall below 100% or
overflow when chapters are added or removed."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def _chapter_counts():
    html = (ROOT / "pages" / "courses.html").read_text(encoding="utf-8")
    block = html[html.index("const REVIEWER_LINKS"):]
    block = block[: block.index("};")]
    pattern = r"(\w+):\s*\{[^}]*chapters:\s*(\d+)"
    return {m.group(1): int(m.group(2)) for m in re.finditer(pattern, block)}


def test_reviewer_chapter_counts_match_manifests():
    counts = _chapter_counts()
    assert counts, "no chapter counts found in REVIEWER_LINKS"
    for course, n in counts.items():
        manifest = ROOT / "courses" / course / "data" / course / "manifest.json"
        chapters = json.loads(manifest.read_text(encoding="utf-8"))["chapters"]
        assert len(chapters) == n, (
            f"{course}: courses.html says {n} chapters, manifest has {len(chapters)}"
        )


def test_every_reviewer_course_has_a_chapter_count():
    counts = _chapter_counts()
    for manifest in sorted((ROOT / "courses").glob("*/data/*/manifest.json")):
        course = manifest.parent.name
        assert course in counts, f"{course} reviewer has no chapter count in courses.html"
