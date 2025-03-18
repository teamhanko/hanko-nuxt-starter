// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/hanko"],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL,
    cookieName: 'hanko',
    redirects:{
      login: '/',//Path to redirect to when unauthenticated / logged out
      success: '/dashboard',//Path to redirect to once logged in
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/style/hanko-starter-style.css','@/style/globals.css']
})
