import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';

import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: [
        // { find: '@components', replacement: path.resolve(__dirname, 'src', 'components') },
        { find: '@components', replacement: path.resolve(__dirname, 'src', 'components') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src', 'assets') },
        { find: '@constants', replacement: path.resolve(__dirname, 'src', 'constants') },
      ],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    svgr({ icon: true }),
    url(),
    json(),

    copy({
      targets: [
        { src: 'src/components/**/*', dest: 'dist/src/components' },
        { src: 'src/assets/**/*', dest: 'dist/src/assets' },
        { src: 'src/constants/**/*', dest: 'dist/src/constants' },
        // Добавьте другие алиасы здесь, если необходимо
      ],
    }),
  ],
  external: ['react', 'react-dom'],
};
