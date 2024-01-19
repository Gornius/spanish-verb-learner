// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
  ],
  imports: {
    presets: [
      {
        from: '@iconify/vue',
        imports: ['Icon'],
      }
    ]
  },
  devtools: { enabled: true },
  ssr: false,
})
