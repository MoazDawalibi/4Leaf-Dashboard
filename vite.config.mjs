import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import env from "vite-plugin-env-compatible";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      rollupOptions: {
        output: {
          entryFileNames: "[name].[hash].js",
          chunkFileNames: "[name].[hash].js",
          assetFileNames: "[name].[hash][extname]",
        },
      },
    },
    envPrefix: "VITE_",
    css: {
      preprocessorOptions: {
        scss: {
          // Optionally add a global import here for variables or mixins
          // additionalData: `@import "src/styles/variables.scss";`,
        },
      },
    },
    plugins: [
      react(),
      env(),
      visualizer({
        filename: "./bundle-analysis.html",
        open: true,
      }),
    ],
  };
});
