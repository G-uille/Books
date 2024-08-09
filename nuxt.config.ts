// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/css/tailwind.css', // Asegúrate de que este archivo exista
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@nuxtjs/tailwindcss'],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})