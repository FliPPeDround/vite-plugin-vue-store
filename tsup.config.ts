import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'packages/*/src/index.ts',
  ],
  dts: true,
  format: [
    'cjs',
    'esm',
  ],
  outDir: 'packages/dist',
  clean: true,
})
