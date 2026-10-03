@echo off
chcp 65001 >nul
title 3D 体素中国古典建筑群场景
echo ========================================================
echo   【天工营造 · 体素紫宸】3D 中国古典建筑群启动中...
echo   正在启动本地 Vite 开发服务器并打开浏览器...
echo ========================================================
echo.

cd /d "%~dp0"
start http://localhost:5188
call npm run dev

pause
