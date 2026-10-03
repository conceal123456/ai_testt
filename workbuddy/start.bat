@echo off
chcp 65001 >nul
title 3D 体素中国古典建筑群 - WorkBuddy

echo ========================================================
echo   太和华章 · 3D 体素中国古典建筑群 (Three.js Voxel)
echo ========================================================
echo.
echo [1/2] 正在启动本地 Web 预览服务 (端口: 8080)...

:: 检测系统 Python 或托管 Python
set PY_CMD=
if exist "D:\AppData\WorkBuddy\binaries\python\versions\3.13.12\python.exe" (
    set PY_CMD="D:\AppData\WorkBuddy\binaries\python\versions\3.13.12\python.exe"
) else (
    where python >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        set PY_CMD=python
    )
)

echo [2/2] 正在为您打开默认浏览器体验 3D 场景...
start http://localhost:8080

if defined PY_CMD (
    %PY_CMD% -m http.server 8080
) else (
    echo [提示] 未找到 Python，正在尝试通过默认方式直接打开 index.html...
    start index.html
    pause
)
