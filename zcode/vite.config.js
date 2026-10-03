import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5188,
    strictPort: true,
    open: false
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200
  }
});
