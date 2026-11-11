import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  nextPlugin.configs["core-web-vitals"],
  {
    ignores: [
      ".next/*",
      "out/*",
      "node_modules/*",
      "**/*.d.ts",
    ],
  },
];

export default eslintConfig;
