import js from "@eslint/js";
import globals from "globals";
import {
  defineConfig
} from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([{
  files: ["**/*.{js,mjs,cjs}"],
  plugins: {
    js,
  },
  extends: [js.configs.recommended, prettier],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.jest
    },
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: [
      "warn",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    env: {
      node: true,
      jest: true
    },
    "arrow-parens": ["error", "always"],
  },
}, ]);