// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  image: {
    dir: 'assets/images'
  },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: "node:18"
        }
      }
    }
  }
})
