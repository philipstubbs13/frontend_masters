import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/preload.ts',
      fileName: 'preload',
    },
  },
});
