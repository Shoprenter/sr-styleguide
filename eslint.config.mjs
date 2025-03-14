import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import { FlatCompat } from '@eslint/eslintrc'
import * as path from "node:path";
import * as url from "node:url";


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...(new FlatCompat({
    baseDirectory: path.dirname(url.fileURLToPath(import.meta.url)),
  }).extends('eslint-config-standard')),
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      'generator-star-spacing': 'off',
      indent: ['error', 4]
    }
  }
];
