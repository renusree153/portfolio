import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',
  css: {
    postcss: {}
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
