import { FlatCompat } from "@eslint/eslintrc";
// import prettier from "eslint-config-prettier/flat";
// import tailwind from "eslint-plugin-tailwindcss";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  // ...tailwind.configs["flat/recommended"],
  // prettier,
];

export default eslintConfig;
