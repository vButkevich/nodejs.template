// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import { fixupConfigRules } from "@eslint/compat";

// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
//   {languageOptions: { globals: globals.node }},
//   pluginJs.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
// ];

import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
