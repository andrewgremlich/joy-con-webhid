import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'joy-con-webhid',
      fileName: (format) => `joy-con-webhid.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
    emptyOutDir: true,
    outDir: 'dist',
  },
});
