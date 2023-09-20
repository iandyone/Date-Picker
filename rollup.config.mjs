import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: '@components', replacement: path.resolve(__dirname, 'src', 'components') },
          { find: '@assets', replacement: path.resolve(__dirname, 'src', 'assets') },
          { find: '@constants', replacement: path.resolve(__dirname, 'src', 'constants') },
          { find: '@decorators', replacement: path.resolve(__dirname, 'src', 'decorators') },
          { find: '@services', replacement: path.resolve(__dirname, 'src', 'services') },
          { find: '@src', replacement: './src' },
        ],
      }),
      peerDepsExternal(),
      svgr({ icon: true }),
      url(),
      resolve(),
      commonjs(),
      typescript(),
    ],
    external: ['react', 'react-dom',],
  },
  {
    input: './dist/src/components/Calendar/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
