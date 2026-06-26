"""Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in TOC."""
import json

import fitz

pdf_path = "D:\\Apps\\SmartCare\\TOC\\International Trauma Life Support.pdf"
output_path = "D:\\Apps\\SmartCare\\TOC\\International Trauma Life Support TOC.json"

doc = fitz.open(pdf_path)
toc = doc.get_toc()
doc.close()

# Filter: keep chapters (level 1), skip index entries (level 2 index letter groups)
# The built-in TOC has level 1 for chapters/frontmatter and level 2 for index A-Z
entries = []
for item in toc:
    level, title, page = item
    # Skip index sub-entries (level 2 entries after "Index")
    if level == 2 and any(e["title"] == "Index" for e in entries):
        continue
    entries.append({
        "level": level,
        "title": title,
        "page": page
    })

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(entries, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(entries)} TOC entries to {output_path}")
for e in entries:
    indent = "  " * (e["level"] - 1)
    print(f"  {indent}L{e['level']}: {e['title']} -> p.{e['page']}")
