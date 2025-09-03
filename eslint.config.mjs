import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    eslintConfigPrettier,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@next/next/no-img-element": "warn",

            // На всякий случай отключаем любые линтер-правила, которые могут трогать порядок импортов:
            "sort-imports": "off",
            "import/order": "off",
            "simple-import-sort/imports": "off",
            "simple-import-sort/exports": "off",
        },
    },
];
