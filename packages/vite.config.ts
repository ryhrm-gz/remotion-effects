import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'remotion-effects',
      fileName: (format) => `remotion-effects.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'remotion'],
    },
  },
});
