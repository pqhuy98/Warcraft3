module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "simple-import-sort"
  ],
  "overrides": [
    {
      "files": ['*.ts'],
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
      },
    }
  ],
  "rules": {
    "no-restricted-syntax": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "linebreak-style": 0,
    "no-continue": "off",
    "semi": ["error", "always"],
    "prefer-const": 2,
    "import/prefer-default-export": "off",
    "no-new": "off",
    "no-plusplus": "off",
    "max-len": [
      "error",
      {
        "code": 200
      }
    ],
    "no-restricted-globals": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "camelcase": "off",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-mixed-operators": "off",
    "no-use-before-define": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "simple-import-sort/imports": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}