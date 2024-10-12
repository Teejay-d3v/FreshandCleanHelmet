// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/main.css',
    '@/assets/css/tailwind.css',
    '@splidejs/splide/dist/css/splide.min.css',
  ],

  app: {
    head: {
      title: 'Nuxt 3',
      meta: [
        { name: 'meta tag name', content: 'meta tag description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
      script: [
        {
          src: 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD',
          defer: true
        }
      ]
    }
  },
  
  runtimeConfig: {
    // This will make currencyKey available in browser as process.env.CURRENCY_API_KEY using -> const { currencyKey } = useRuntimeConfig() 
    // Check -> ([code].js file)
    currencyKey: process.env.CURRENCY_API_KEY
  },
  compatibilityDate: '2024-08-20'
})