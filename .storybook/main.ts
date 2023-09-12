import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import path from 'path';

const alias = {
  '@components': path.resolve(__dirname, 'src', 'components'),
  '@assets': path.resolve(__dirname, 'src', 'assets'),
  '@constants': path.resolve(__dirname, 'src', 'constants'),
  '@styles': path.resolve(__dirname, 'src', 'styles'),
  '@utils': path.resolve(__dirname, 'src', 'utils'),
  '@hooks': path.resolve(__dirname, 'src', 'hooks'),
  '@store': path.resolve(__dirname, 'src', 'store'),
  '@reducers': path.resolve(__dirname, 'src', 'store', 'reducers'),
  '@pages': path.resolve(__dirname, 'src', 'pages'),
  '@appTypes': path.resolve(__dirname, 'src', 'types'),
  '@observers': path.resolve(__dirname, 'src', 'observers'),
  '@config': path.resolve(__dirname, 'config'),
  '@src': path.resolve(__dirname, 'src'),
};

const svgLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
};

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [svgLoader, ...(config?.module?.rules || [])],
      },
      resolve: {
        ...config.resolve,
        plugins: [new TsconfigPathsPlugin()],
        alias: {
          ...config.resolve?.alias,
          ...alias,
        },
      },
    };
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
