#!/usr/bin/env python3
"""Guard against a WCAG AA contrast regression in pages/exam-review.css
and the app shell's footer in styles.css.

Regression test for a real bug: --muted (used by the hint box, exam-card
meta text, nav counter, sidebar stat labels, and disclaimer link across
all 8 exam-review pages) failed the 4.5:1 AA threshold against every
background in all 4 themes — as low as 2.83:1 in the green theme. Found
via a July 2026 production audit and confirmed by a user screenshot
showing genuinely unreadable helper text ("Select an answer, then use
the buttons above to get help").

Parses the CSS custom properties directly out of exam-review.css rather
than hard-coding theme colors here, so this stays correct if a theme's
palette changes — it would only need updating if a *new* CSS variable
starts being used for body text and needs the same guarantee.

Also guards a second, unrelated bug found by the same audit: styles.css's
footer used --text-secondary (tuned for the theme's opaque light glass
cards) directly on the raw dark --bg-gradient, computing to ~2.1:1 —
fixed with a dedicated --footer-text token. This check composites
footer's rgba(0,0,0,0.35) overlay over every stop of the default theme's
--bg-gradient and verifies --footer-text clears 4.5:1 against all of them.

Usage: python3 scripts/check_contrast.py
"""
import re
import sys

ROOT_CSS = "pages/exam-review.css"
APP_SHELL_CSS = "styles.css"
MIN_CONTRAST = 4.5
FOOTER_OVERLAY = (0, 0, 0, 0.35)  # footer { background: rgba(0,0,0,0.35) }

# Text-role custom properties checked against every background role.
TEXT_VARS = ["muted"]
BG_VARS = ["bg", "panel", "card"]


def hex_to_rgb(h):
    h = h.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def luminance(rgb):
    def chan(c):
        c = c / 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

    r, g, b = (chan(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(hex1, hex2):
    l1, l2 = luminance(hex_to_rgb(hex1)), luminance(hex_to_rgb(hex2))
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def composite(fg_rgba, bg_hex):
    """Flatten an rgba() overlay onto an opaque hex background (alpha blend)."""
    r, g, b, a = fg_rgba
    bg = hex_to_rgb(bg_hex)
    return tuple(round(fg * a + bg[i] * (1 - a)) for i, fg in enumerate((r, g, b)))


def check_footer(css):
    """Verify styles.css's --footer-text clears MIN_CONTRAST against the
    footer's actual composited background (its own rgba(0,0,0,0.35)
    overlay on top of every stop in the default theme's --bg-gradient)."""
    root_match = re.search(r":root\s*\{([^}]*)\}", css)
    if not root_match:
        return [f"FAIL: no :root block found in {APP_SHELL_CSS}"]
    body = root_match.group(1)

    footer_text = dict(re.findall(r"--([\w-]+):\s*(#[0-9a-fA-F]{3,6})", body)).get(
        "footer-text"
    )
    if not footer_text:
        return [f"FAIL: no --footer-text found in :root of {APP_SHELL_CSS}"]

    gradient_match = re.search(r"--bg-gradient:\s*([^;]+);", body)
    stops = re.findall(r"#[0-9a-fA-F]{3,6}", gradient_match.group(1)) if gradient_match else []
    if not stops:
        return [f"FAIL: no --bg-gradient stops found in :root of {APP_SHELL_CSS}"]

    errors = []
    for stop in stops:
        composited = "#%02x%02x%02x" % composite(FOOTER_OVERLAY, stop)
        c = contrast(footer_text, composited)
        if c < MIN_CONTRAST:
            errors.append(
                f"footer --footer-text ({footer_text}) on --bg-gradient stop {stop} "
                f"(composited {composited}): {c:.2f}:1, needs {MIN_CONTRAST}:1"
            )
    return errors


def parse_themes(css):
    """Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block."""
    themes = {}
    pattern = r'(:root(?:,\[data-theme="(\w+)"\])?|\[data-theme="(\w+)"\])\s*\{([^}]*)\}'
    for match in re.finditer(pattern, css):
        name = match.group(2) or match.group(3) or "dark"
        body = match.group(4)
        themes.setdefault(name, {})
        for var, val in re.findall(r"--([\w-]+):\s*(#[0-9a-fA-F]{3,6})", body):
            themes[name][var] = val
    return themes


def main():
    with open(ROOT_CSS, encoding="utf-8") as fh:
        css = fh.read()

    themes = parse_themes(css)
    if not themes:
        print(f"FAIL: no themes found in {ROOT_CSS}", file=sys.stderr)
        return 1

    errors = []
    for theme_name, vars_ in themes.items():
        for text_var in TEXT_VARS:
            if text_var not in vars_:
                continue
            for bg_var in BG_VARS:
                if bg_var not in vars_:
                    continue
                c = contrast(vars_[text_var], vars_[bg_var])
                if c < MIN_CONTRAST:
                    errors.append(
                        f"[data-theme={theme_name}] --{text_var} ({vars_[text_var]}) on "
                        f"--{bg_var} ({vars_[bg_var]}): {c:.2f}:1, needs {MIN_CONTRAST}:1"
                    )

    with open(APP_SHELL_CSS, encoding="utf-8") as fh:
        app_shell_css = fh.read()
    footer_errors = check_footer(app_shell_css)
    errors.extend(footer_errors)

    if errors:
        print(f"contrast check FAILED — {len(errors)} problem(s):\n", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        return 1

    print(
        f"contrast check OK — checked {len(themes)} themes x {len(TEXT_VARS)} text vars "
        f"x {len(BG_VARS)} backgrounds, plus {APP_SHELL_CSS} footer"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
