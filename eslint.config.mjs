import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'linebreak-style': 'off',
      indent: 'off',
      'no-prototype-builtins': 'off',
      'no-const-assign': off,
    },
  },
];
