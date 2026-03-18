@echo off
title Deploy to GitHub Pages
echo ============================================
echo   One-Click Build ^& Deploy to GitHub Pages
echo ============================================
echo.

:: Navigate to project directory
cd /d "%~dp0"

:: Step 1: Install dependencies
echo [1/5] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Install failed!
    pause
    exit /b 1
)
echo       Dependencies updated!
echo.

:: Step 2: Build the project
echo [2/5] Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed! Fix the errors above and try again.
    pause
    exit /b 1
)
echo       Build successful!
echo.

:: Step 3: Stage all changes
echo [3/5] Staging all changes...
git add -A
echo       All changes staged.
echo.

:: Step 4: Commit
echo [4/5] Committing changes...
set "timestamp=%date% %time%"
git commit -m "Deploy update - %timestamp%"
if %errorlevel% neq 0 (
    echo.
    echo NOTE: Nothing to commit. Pushing existing commits...
)
echo.

:: Step 5: Push to GitHub
echo [5/5] Pushing to GitHub...
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
