import path from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass(),
    pluginSvgr(),
    pluginCheckSyntax({
      ecmaVersion: 2020,
      exclude: /node_modules/,
    }),
  ],
  html: {
    template: path.resolve(__dirname, './public/index.html'),
    favicon: path.resolve(__dirname, './public/favicon.ico'),
  },
  source: {
    alias: () => {
      return {
        '@': path.resolve(__dirname, './src'),
      };
    },
  },
  server: {
    proxy: {
      '/v1': `${process.env.API_HOST}`,
    },
  },
  tools: {
    rspack: {
      plugins: [],
    },
  },
});
