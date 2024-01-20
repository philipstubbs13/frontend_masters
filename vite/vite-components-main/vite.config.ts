import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'fem-components',
      filename: 'remoteEntry.js',
      exposes: {
        './button': './src/components/button.tsx',
        './input': './src/components/input.tsx'
      },
      shared: ['react', 'react-dom'],
    })
],
build: {
  target: 'esnext',
}
});
