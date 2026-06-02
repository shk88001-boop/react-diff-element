import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin/g, '');
    }
  };
}

export default defineConfig({
  base: './',                       // relative asset paths — safer when embedded
  plugins: [react(), stripCrossorigin()],
  server: { port: 5180, open: true }
});
