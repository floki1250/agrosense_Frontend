import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "AgroSense",
      meta: [
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },

  build: {
    transpile: ["chart.js", "primevue"],
  },

  components: {
    dirs: [
      {
        extensions: ["vue"],
        global: true,
        path: "~/components/common/",
        pathPrefix: false,
      },
    ],
  },

  css: [
    "primevue/resources/primevue.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "~/assets/styles/agro.css",
    "~/assets/styles/layout.scss",
    "~/assets/demo/flags/flags.css",
  ],

  dir: {
    public: "../public/",
  },

  experimental: {
    reactivityTransform: false,
    treeshakeClientOnly: false,
  },

  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },

  modules: ["@pinia/nuxt", "@vueuse/nuxt", "~/modules/primevue"],

  nitro: {
    preset: "vercel",
  },

  srcDir: "src/",

  vite: {
    build: {
      sourcemap: false,
    },
    clearScreen: true,
    logLevel: "info",
  },
});
