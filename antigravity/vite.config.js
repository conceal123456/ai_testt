import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 支持相对路径部署与本地静态预览
  server: {
    port: 5173,
    open: true, // 启动时自动在浏览器中打开页面
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
  },
});
