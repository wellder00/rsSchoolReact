import { defineConfig, coverageConfigDefaults } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.jsdom.ts'],
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './tests/unit/coverage',
      include: ['src/**'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/main.tsx',
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/**/constants.ts',
        'src/**/interfaces.ts',
        'src/**/data.ts',
        'src/**/api.ts',
        'src/**/CardInfo.tsx',
        'src/**/reduxHooks.ts',
        'src/**/pokemonSlice.ts',
        'src/**/ErrorBoundary.tsx',
      ],
    },
    css: false,
  },
});
