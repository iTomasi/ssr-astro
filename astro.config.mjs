import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), react()],
  vite: {
    server: {
      watch: {
        ignored: ["!**/node_modules/pg-native/**"]
      }
    },
    optimizeDeps: {
      exclude: ["pg-native"]
    }
  }
})