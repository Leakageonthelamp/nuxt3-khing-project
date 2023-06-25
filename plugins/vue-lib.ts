import VueScrollTo from 'vue-scrollto'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo, { offset: -120 })
})
