@echo off
cd /d "%~dp0server"
if not exist .venv python -m venv .venv
call .venv\Scripts\activate
pip install -q -r requirements.txt
if not exist .env copy .env.example .env >nul
echo Open http://localhost:8000  (Ctrl+C to stop)
uvicorn main:app --reload
