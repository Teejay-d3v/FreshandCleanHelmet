// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-gtag'],

  css: [
    '~/assets/css/main.css',
    '@splidejs/splide/dist/css/splide.min.css'
  ],

  'google-gtag': {
    id: 'G-37QBP6H10E', // Make sure to remove any leading spaces
    config: {
      anonymize_ip: true,
      send_page_view: true
    },
    debug: false // Set to true for debugging in development
  },

  app: {
    head: {
      title: 'Nuxt 3',
      meta: [
        { name: 'meta tag name', content: 'meta tag description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],

    }
  },
  
  runtimeConfig: {
    // This will make currencyKey available in browser as process.env.CURRENCY_API_KEY using -> const { currencyKey } = useRuntimeConfig() 
    // Check -> ([code].js file)
    currencyKey: process.env.CURRENCY_API_KEY
  },
  compatibilityDate: '2024-08-20',
  
})