import { defineConfig } from "vite";
import { resolve } from "path";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
    assetsInclude: [
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.SVG",
        "**/*.webp",
    ],
    server: {
        port: 3000,
        open: "./src/index.html",
    },
    build: {
        rollupOptions: {
            input: {
                nested: resolve(__dirname, "src/index.html"),
            },
        },
    },
    plugins: [splitVendorChunkPlugin()],
});
