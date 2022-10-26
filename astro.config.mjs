import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://bartoszjaniuk.github.io",
  base: "/astro-umami",
  integrations: [react()],
  vite: {
    ssr: { noExternal: ["styled-components"] },
  },
});
