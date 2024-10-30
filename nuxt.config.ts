// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, 
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap', ],
  css: [
    '~/assets/css/main.css',
    '@splidejs/splide/dist/css/splide.min.css'
  ],
  site: {
    url: 'https://helmetprosolutions.com',
    title: 'HelmetPro',
    description: 'Discover the Future of Helmet Cleaning!',
  },
  sitemap : {
    hostname: 'https://helmetprosolutions.com',
    gzip: true,
    routes: [
      '/',
      '/about',
      '/computation',
      '/faqs',
      '/contactus',
      '/partnership'
    ]

  },
  gtag: {
    tags: [
      {
        id : 'G-37QBP6H10E',
        config : {
          anonymize_ip: true,
          send_page_view: true
        },
        debug : false
      }
    ]
  },
  app: {
    head: {
      title: 'HelmetPro',
      meta: [
        { name: "google-site-verification", content: "mHQvuhVBW3VoNiu4sXj2VYdASDbEwHHv_6S38lOj6cQ"},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Responsive design
        { hid: 'description', name: 'description', content: 'Discover the Future of Helmet Cleaning!' }, // SEO description
        { hid: 'keywords', name: 'keywords', content: 'Helmet vending machine, helmet rental, automatic helmet dispenser, helmet cleaning, helmet hygiene, motolvog, helmetpro, helmet pro, helmetprosolutions' }, // Keywords for SEO
        { hid: 'og:title', property: 'og:title', content: 'HelmetPro' }, // Open Graph title
        { hid: 'og:description', property: 'og:description', content: 'Discover the Future of Helmet Cleaning!' }, // Open Graph description
        { hid: 'og:image', property: 'og:image', content: 'https://www.helmetprosolutions.com/images/logo4og.png' }, // Open Graph image
        { hid: 'og:url', property: 'og:url', content: 'https://www.helmetprosolutions.com/' }, // Open Graph URL
        { hid: 'og:type', property: 'og:type', content: 'website' }, // Open Graph type
        { hid: 'fb:app_id', property: 'fb:app_id', content: 'YOUR_FACEBOOK_APP_ID' } // Facebook App ID
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
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