import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ViteScssPlugin from 'vite-plugin-scss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteScssPlugin()
  ],
});