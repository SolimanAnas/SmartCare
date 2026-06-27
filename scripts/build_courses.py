import json
import os
import sys


def main():
    print("=" * 60)
    print(" SmartCare Course Builder & JSON/JS Schema Validator")
    print("=" * 60)

    workspace_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    courses_dir = os.path.join(workspace_root, "courses")

    if not os.path.exists(courses_dir):
        print(f"[-] Courses directory not found: {courses_dir}")
        sys.exit(1)

    course_folders = [
        f for f in os.listdir(courses_dir)
        if os.path.isdir(os.path.join(courses_dir, f))
    ]
    print(f"[+] Found {len(course_folders)} course folders: {', '.join(course_folders)}")

    has_errors = False

    for folder in course_folders:
        course_path = os.path.join(courses_dir, folder)
        manifest_path = os.path.join(course_path, "manifest.json")

        print(f"\n[*] Validating course: {folder}")
        if not os.path.exists(manifest_path):
            print(f"  [-] ERROR: manifest.json is missing in {course_path}")
            has_errors = True
            continue

        try:
            with open(manifest_path, 'r', encoding='utf-8') as f:
                manifest = json.load(f)
            print("  [+] manifest.json is valid JSON")
        except Exception as e:
            print(f"  [-] ERROR: Failed to parse manifest.json: {e}")
            has_errors = True
            continue

        # Basic Manifest Keys Check
        required_keys = ["id", "title", "shortTitle", "category", "chapters"]
        for key in required_keys:
            if key not in manifest:
                print(f"  [-] ERROR: Missing required manifest field: '{key}'")
                has_errors = True

        # Validate chapters listed in manifest
        chapters = manifest.get("chapters", [])
        print(f"  [*] Manifest contains {len(chapters)} chapter(s)")

        for ch in chapters:
            ch_id = ch.get("id")
            ch_num = ch.get("num")
            ch_title = ch.get("title")

            if not ch_id or not ch_num or not ch_title:
                print(f"    [-] ERROR: Chapter entry missing id, num, or title: {ch}")
                has_errors = True
                continue

            # Verify file exists (assuming naming convention courses/courseId/chapters/chapterId.js)
            ch_filename = f"{ch_id}.js"
            ch_filepath = os.path.join(course_path, "chapters", ch_filename)

            # Only chapter 1 is implemented; skip warnings for missing others
            if not os.path.exists(ch_filepath):
                if ch_id == "c01":
                    print(f"    [-] ERROR: Chapter 1 file is missing at {ch_filepath}")
                    has_errors = True
                else:
                    # Informational only
                    print(f"    [~] Chapter {ch_num} is planned (file not present yet)")
                continue

            print(f"    [+] Found chapter file: {ch_filename}")

            # Validate JavaScript data format and CPG_DATA keys
            try:
                import subprocess
                # Evaluate JS in Node and dump CPG_DATA as JSON
                normalized_path = ch_filepath.replace("\\", "/")
                node_code = (
                    f"global.window = {{}}; require('{normalized_path}');"
                    f" console.log(JSON.stringify(global.window.CPG_DATA));"
                )
                result = subprocess.run(["node", "-e", node_code], capture_output=True, text=True)

                if result.returncode != 0:
                    msg = f"    [-] ERROR: Node.js failed to execute {ch_filename}: {result.stderr}"
                    print(msg)
                    has_errors = True
                    continue

                data = json.loads(result.stdout)

                # Validate structured keys
                ch_required = ["id", "title", "shortTitle", "sections",
                               "flashcards", "quiz", "critical"]
                for rk in ch_required:
                    if rk not in data:
                        print(f"      [-] ERROR: CPG_DATA is missing '{rk}' field in {ch_filename}")
                        has_errors = True

                # Validate counts
                sections = data.get("sections", [])
                flashcards = data.get("flashcards", [])
                quizzes = data.get("quiz", [])
                criticals = data.get("critical", [])

                print(
                    f"      [+] Verified {len(sections)} sections,"
                    f" {len(flashcards)} flashcards,"
                    f" {len(quizzes)} quiz questions,"
                    f" and {len(criticals)} critical scenarios."
                )

                # Assert counts for Chapter 1
                if ch_id == "c01":
                    if len(flashcards) < 20:
                        print(
                            f"      [-] WARNING: Flashcards count is"
                            f" {len(flashcards)}, expected at least 20."
                        )
                    if len(quizzes) < 20:
                        print(
                            f"      [-] WARNING: Quiz question count is"
                            f" {len(quizzes)}, expected at least 20."
                        )
                    if len(criticals) < 5:
                        print(
                            f"      [-] WARNING: Scenario count is"
                            f" {len(criticals)}, expected at least 5."
                        )

            except Exception as e:
                print(f"    [-] ERROR: Failed to validate JS data inside {ch_filename}: {e}")
                has_errors = True

    print("\n" + "=" * 60)
    if has_errors:
        print("[-] Build & validation completed with errors.")
        sys.exit(1)
    else:
        print("[+] Build & validation completed successfully! All files are aligned.")
        sys.exit(0)

if __name__ == "__main__":
    main()
