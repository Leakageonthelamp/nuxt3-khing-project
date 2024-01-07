// https://nuxt.com/docs/api/configuration/nuxt-config
import { CONFIG } from './constants/config.const'

export default defineNuxtConfig({
  experimental: {
    writeEarlyHints: true,
    payloadExtraction: false,
  },
  components: [
    {
      path: '~/components',
      extensions: ['vue'],
    },
  ],
  imports: {
    dirs: ['hooks'],
  },
  app: {
    head: {
      title: CONFIG.APP_TITLE,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
      link: [
        {
          rel: 'dns-prefetch',
          href: 'https://www.google-analytics.com/',
        },
        {
          rel: 'preconnect',
          href: 'https://www.google-analytics.com/',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    'nuxt-icon',
    'vue3-carousel-nuxt',
  ],

  css: ['@/assets/main.scss'],

  typescript: {
    shim: false,
  },
  devtools: {
    enabled: true,
  },
})
