import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
function htmlEntries(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? htmlEntries(path) : entry.name === 'index.html' ? [path] : [];
  });
}
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: { allowedHosts: ['terminal.local'] },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: [resolve('index.html'), ...htmlEntries('examples'), ...htmlEntries('projects')],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.test.{js,jsx}'],
    restoreMocks: true,
  },
});
