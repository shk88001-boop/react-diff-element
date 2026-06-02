import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React setup. No backend, fully static SPA.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    open: true
  }
});
