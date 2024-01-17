// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  ssr: false,
})
