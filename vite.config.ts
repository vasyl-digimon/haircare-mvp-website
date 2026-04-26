import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Додаткове розділення бібліотек для швидкості
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});