// @ts-check
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'auto' },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [typescript()],
};

export default config;
