#!/usr/bin/env python3
"""Fails if anything that looks like a real API key is in the repo, or if .env is tracked.
Run before every push:  python scripts/check-secrets.py"""
import os, re, subprocess, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PATTERNS = {
    "Groq key": r"gsk_[A-Za-z0-9]{20,}", "OpenAI-style key": r"sk-[A-Za-z0-9_\-]{20,}",
    "Google key": r"AIza[0-9A-Za-z_\-]{30,}", "GitHub token": r"gh[pousr]_[A-Za-z0-9]{30,}",
    "Private key block": r"-----BEGIN [A-Z ]*PRIVATE KEY-----",
    "Hard-coded secret": r"(?i)(api[_-]?key|secret|token|password)\s*[:=]\s*['\"](?!DEMO_KEY)[A-Za-z0-9_\-]{16,}['\"]",
}
SKIP_DIRS = {".git", ".venv", "node_modules", "__pycache__"}
def files():
    try:
        out = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True, text=True, check=True).stdout.split("\n")
        return [f for f in out if f]
    except Exception:
        return [os.path.relpath(os.path.join(d, f), ROOT) for d, ds, fs in os.walk(ROOT)
                if not set(d.split(os.sep)) & SKIP_DIRS for f in fs]
bad = []
for f in files():
    if f.endswith((".png", ".jpg", ".zip", ".ico")) or f.endswith("check-secrets.py"):
        continue
    if os.path.basename(f) == ".env":
        bad.append((f, "the real .env file is tracked by git"))
        continue
    try:
        text = open(os.path.join(ROOT, f), encoding="utf-8", errors="ignore").read()
    except Exception:
        continue
    for name, pat in PATTERNS.items():
        if re.search(pat, text):
            bad.append((f, name))
if bad:
    print("POSSIBLE SECRETS FOUND:")
    for f, n in bad: print(" -", f, "->", n)
    print("Revoke any real key, remove it from the file, and scrub git history (see docs/SECURITY.md).")
    sys.exit(1)
print("OK: no secrets found")
