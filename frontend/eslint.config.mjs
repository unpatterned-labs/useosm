import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            "dist/",
            "node_modules/",
            ".astro/",
            ".output/",
            "public/"
        ]
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
                sourceType: "module"
            },
        },
    },
    eslintConfigPrettier
];
