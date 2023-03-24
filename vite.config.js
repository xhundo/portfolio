import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    server: {
        port: 3000,
        open: "./src/index.html",
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
            },
        },
        watch: {
            exclude: "node_modules/**",
            include: "css/**",
        },
    },
});
