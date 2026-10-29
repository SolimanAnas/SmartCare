"""Rewritten SmartCare topics must match their chapter's reference notes.

A rewritten topic (a section of content/cN.js with a `guide`, rendered by
cpg-guide.js) is checked three ways:

* every number on the page and in the study sets' right answers,
  explanations and flashcard answers – doses, rates, ages, times,
  thresholds – appears in data/references/cN.md, the chapter's reference
  notes (each fact there names its guideline or standard);
* the study sets are well formed;
* the topic meets the study-set minimums: 10 quiz questions, 8 flashcards
  and 3 scenarios.

Topics not yet rewritten (HTML `summary` only) are not checked.
"""

import html
import json
import re
import shutil
import subprocess  # nosec B404
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
REFERENCES = ROOT / "data" / "references"
CHAPTERS = [f"c{n}" for n in range(1, 11)]
MIN_QUIZ, MIN_FLASHCARDS, MIN_SCENARIOS = 10, 8, 3

# Keys that hold links, ids or labels rather than clinical text.
SKIP_KEYS = {
    "id", "href", "group", "type", "icon", "tone", "start", "level", "label", "ecg", "lead",
}

UNITS = (
    r"mcg/kg/min|mg/kg|ml/kg|j/kg|mcg/min|mcg|mg|ml|l/min|lpm|breaths/min|/min|bpm|mmhg|cmh2o|°c|%|j|cm|"
    r"minute|second|hour|week|year|st|nd|rd|th"
)
NUMBER = re.compile(
    r"(?<![a-z0-9.])(\d+(?:\.\d+)?(?:\s*-\s*\d+(?:\.\d+)?)?)(?:\s*(" + UNITS + r")(?![a-z]))?"
)


def unify(text: str) -> str:
    text = re.sub(r"[‐-―−]", "-", text.lower())
    text = text.replace("₂", "2")
    return re.sub(r"\b(second|minute|hour|week|year)s\b", r"\1", text)


def page_text(text: str) -> str:
    """A page string without its inline tags (<b>, <sub>) and entities."""
    return unify(html.unescape(re.sub(r"<[^>]+>", "", text)))


def squash(text: str) -> str:
    return re.sub(r"\s+", "", text)


def strings(node, key=None):
    if key in SKIP_KEYS:
        return
    if isinstance(node, str):
        yield node
    elif isinstance(node, list):
        for item in node:
            yield from strings(item)
    elif isinstance(node, dict):
        for k, v in node.items():
            yield from strings(v, k)


def study_strings(section: dict):
    """Right answers and explanations state facts; wrong options and
    scenario stems (made-up vital signs) do not, so they are not checked."""
    for q in section.get("quiz", []):
        yield q["options"][q["correct"]]
        yield q.get("explanation", "")
    for card in section.get("flashcards", []):
        yield card["answer"]
    for c in section.get("critical", []):
        yield c["options"][c["correct"]]["t"]
        yield c.get("explanation", "")


def rewritten_topics():
    if not shutil.which("node"):
        return []
    topics = []
    for chapter in CHAPTERS:
        path = CONTENT / f"{chapter}.js"
        out = subprocess.run(  # nosec B603 B607
            ["node", "-e", f"global.window={{}};require({json.dumps(str(path))});"
             "process.stdout.write(JSON.stringify(window.CPG_DATA.sections.filter(s => s.guide)))"],
            check=True, capture_output=True, text=True,
        ).stdout
        topics += [(chapter, s) for s in json.loads(out)]
    return topics


TOPICS = rewritten_topics()
IDS = [s["id"] for _, s in TOPICS]


@pytest.mark.parametrize("chapter,section", TOPICS, ids=IDS)
def test_study_sets_meet_the_minimums(chapter, section):
    assert len(section["quiz"]) >= MIN_QUIZ, "quiz"
    assert len(section["flashcards"]) >= MIN_FLASHCARDS, "flashcards"
    assert len(section["critical"]) >= MIN_SCENARIOS, "scenarios"
    for q in section["quiz"]:
        assert 0 <= q["correct"] < len(q["options"]), q["q"]
        assert len(set(q["options"])) == len(q["options"]), q["q"]
        assert not re.search(r"\b(all|none) of the above\b", " ".join(q["options"]), re.I), q["q"]
    for c in section["critical"]:
        assert 0 <= c["correct"] < len(c["options"]), c["id"]


@pytest.mark.parametrize("chapter,section", TOPICS, ids=IDS)
def test_numbers_match_the_reference_notes(chapter, section):
    notes = REFERENCES / f"{chapter}.md"
    assert notes.is_file(), f"Missing {notes.relative_to(ROOT)}"
    source = squash(unify(notes.read_text(encoding="utf-8")))
    missing = []
    for text in [*strings(section["guide"]), *study_strings(section)]:
        for number, unit in NUMBER.findall(page_text(text)):
            token = squash(number + (unit or ""))
            if token not in source:
                missing.append(f"{token!r} in: {html.unescape(re.sub('<[^>]+>', '', text))}")
    assert not missing, "Not in the reference notes:\n" + "\n".join(missing)
