// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    writeEarlyHints: true
  },
  app: {
    head: {
      title: 'Sidebase Khing',
    }
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxtjs/google-fonts'
  ],
  css: ['@/assets/main.scss'],
  typescript: {
    shim: false
  },
  googleFonts: {
    families: {
      'noto-sans': [400, 500, 600, 700]
    }
  }
})
