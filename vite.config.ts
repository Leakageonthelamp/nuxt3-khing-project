import { defineConfig } from 'vitest/config'
import VueTypeImports from 'vite-plugin-vue-type-imports'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'setupTests.ts',
  },
  plugins: [VueTypeImports()],
})
