@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install Node.js 24 LTS, then reopen this script.
 pause
 exit /b 1
)
if not exist node_modules (
 call npm.cmd ci
 if errorlevel 1 (
  echo Installation failed. Read the error above and docs\DEPLOYMENT.md.
  pause
  exit /b 1
 )
)
call npm.cmd run dev
pause
