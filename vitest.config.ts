import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["vitestSetup.ts"],
        coverage: {
            provider: "v8", // or 'istanbul' with npm i -D @vitest/coverage-istanbul
            reporter: "html"
        },
        reporters: ["default", "html"],
        testTimeout: 15000,
    },
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
});
