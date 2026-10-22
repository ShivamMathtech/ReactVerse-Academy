@echo off
setlocal
cd /d "%~dp0"
call npm.cmd ci
if errorlevel 1 exit /b 1
call npm.cmd run verify
if errorlevel 1 exit /b 1
call npm.cmd run format:check
pause
