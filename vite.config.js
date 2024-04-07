import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": "/src/Components",
      "@Pages": "/src/Pages",
      "@Data": "/src/Data",
      "@assets": "/src/assets",
      "@Images": "/src/assets/Images",
      "@Hooks": "/src/Hooks",
    },
  },
});
