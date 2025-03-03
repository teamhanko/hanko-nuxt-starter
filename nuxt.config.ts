// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/hanko"],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL,
    cookieName: 'hanko',
    redirects:{
      login: '/',
      home: '/',
      success: '/dashboard',
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/style/hanko-starter-style.css','@/style/globals.css']
})
