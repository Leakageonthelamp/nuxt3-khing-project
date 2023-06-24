import { resolve } from 'path'
import { defineConfig } from 'vite'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  root: '.',
  esbuild: {
    tsconfigRaw: '{}',
  },
  resolve: {
    alias: {
      '~': r('.'),
    },
  },
})
