@echo off
title Deploy to GitHub Pages
echo ============================================
echo   One-Click Build ^& Deploy to GitHub Pages
echo ============================================
echo.

:: Navigate to project directory
cd /d "%~dp0"

:: Step 1: Build the project
echo [1/4] Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed! Fix the errors above and try again.
    pause
    exit /b 1
)
echo       Build successful!
echo.

:: Step 2: Stage all changes
echo [2/4] Staging all changes...
git add -A
echo       All changes staged.
echo.

:: Step 3: Commit
echo [3/4] Committing changes...
set "timestamp=%date% %time%"
git commit -m "Deploy update - %timestamp%"
if %errorlevel% neq 0 (
    echo.
    echo NOTE: Nothing to commit. Pushing existing commits...
)
echo.

:: Step 4: Push to GitHub
echo [4/4] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Push failed! Check your internet connection or Git credentials.
    pause
    exit /b 1
)
echo.

echo ============================================
echo   Deployment triggered successfully!
echo   GitHub Actions will now build ^& deploy.
echo   Check: https://github.com/jennyfer-yang/777/actions
echo ============================================
echo.
pause
