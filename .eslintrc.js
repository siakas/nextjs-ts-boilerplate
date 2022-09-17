module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports'],
  rules: {
    /* React v17 以降で eslint-plugin-react を使用している場合の設定 */
    /* 下記を OFF にすることで不要なエラーを回避 */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    /* 静的サイト構築にともなう img タグの記述許可 */
    '@next/next/no-img-element': 'off',

    /* unused-imports 向けの設定 */
    '@typescript-eslint/no-unused-vars': 'off', // or 'no-unused-vars': 'off'
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [],
}
