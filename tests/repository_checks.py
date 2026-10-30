from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]

required = [
    "README.md", "DESCRIPTION.md", "LICENSE", "SECURITY.md",
    "openapi-specifications/library-api.yaml",
    "examples/node-express/src/app.js",
    "examples/node-express/test/api.test.js",
    "docs/learning-roadmap.md",
]
missing = [item for item in required if not (ROOT / item).is_file()]
assert not missing, f"Missing required files: {missing}"

collection = json.loads((ROOT / "postman-collections/library-api.postman_collection.json").read_text())
assert collection["info"]["name"]
assert len(collection["item"]) >= 3

module_dirs = [p for p in ROOT.iterdir() if p.is_dir() and re.match(r"^\d{2}-", p.name)]
assert len(module_dirs) == 15, f"Expected 15 modules, found {len(module_dirs)}"

print(f"PASS: {len(required)} required files, Postman JSON, and {len(module_dirs)} learning modules")
