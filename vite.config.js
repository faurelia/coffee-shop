import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "about.html"),
        menu: resolve(rootDir, "menu.html"),
        giftCards: resolve(rootDir, "gift-cards.html"),
        rewards: resolve(rootDir, "rewards.html"),
        contact: resolve(rootDir, "contact.html"),
      },
    },
  },
});
