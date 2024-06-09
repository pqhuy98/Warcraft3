module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort'
  ],
  ignorePatterns: ['**/war3map.d.ts', __dirname + "/scripts/*"],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['.eslintrc.js'],
      parser: 'espree', // or another JavaScript parser
      env: { node: true },
    }
  ],
  rules: {
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'linebreak-style': 0,
    'no-continue': 'off',
    semi: ['error', 'always'],
    'prefer-const': 2,
    'import/prefer-default-export': 'off',
    'no-new': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off',
    'max-len': [
      'error',
      {
        code: 200,
      }
    ],
    'no-restricted-globals': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    camelcase: 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      }
    ],
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      },
    ],
    'simple-import-sort/imports': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
      }
    },
  }
}
