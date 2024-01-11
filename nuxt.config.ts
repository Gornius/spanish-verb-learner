// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  ssr: false,
})
