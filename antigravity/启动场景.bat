@echo off
chcp 65001 >nul
title 古韵天工 · 3D体素中国古典建筑群
echo ======================================================================
echo   古韵天工 · 3D体素中国古典建筑群 (Three.js Voxel Architecture)
echo ======================================================================
echo.
echo [1/2] 正在启动本地服务器...
echo [2/2] 正在为您自动唤起浏览器并载入 3D 建筑群场景...
echo.
echo 提示：
echo - 浏览器将自动打开 http://localhost:5173
echo - 鼠标左键：拖拽旋转视角
echo - 鼠标右键：平移画面
echo - 滚轮缩放：放大/缩小视角
echo - 关闭本窗口即可停止服务器
echo.
npm run dev
pause
