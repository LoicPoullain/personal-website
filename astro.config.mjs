// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://loicpoullain.com',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/about": "/",
    "/articles": "/software-engineering",
    "/talks": "/software-engineering",
    "/articles/front-and-second-line-developers":
      "/software-engineering/articles/front-and-second-line-developers",
  },
});
