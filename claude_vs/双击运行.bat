@echo off
chcp 65001 >nul
title 3D体素中国古典建筑群 - Three.js
echo ======================================================================
echo   【3D体素中国古典建筑群】 正在启动本地服务器...
echo   浏览器将自动打开：http://localhost:5173
echo ======================================================================
cd /d "%~dp0"
start http://localhost:5173
npm run dev
pause
