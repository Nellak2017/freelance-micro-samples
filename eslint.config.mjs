import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
const eslintConfig = defineConfig([
    ...nextVitals,
    { // https://mui.com/material-ui/guides/minimizing-bundle-size/
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "no-restricted-imports": [
                "error", {
                    paths: [
                        { name: "@mui/material", message: "Use subpath imports: @mui/material/Button etc." },
                        { name: "@mui/icons-material", message: "Use subpath imports: @mui/icons-material/Add etc." },
                        { name: "@mui/lab", message: "Use subpath imports, not the package root." }
                    ]
                },
            ],
        },
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts',]),
])
export default eslintConfig