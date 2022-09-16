module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    // 静的サイト構築にともなう img タグの記述許可
    '@next/next/no-img-element': 'off',
  },
}
