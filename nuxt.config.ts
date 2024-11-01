// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, 
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-gtag', 
    '@nuxtjs/sitemap', 
    '@nuxt/image',
  ],
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.helmetprosolutions.com/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'https://www.helmetprosolutions.com/favicon/android-chrome-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://www.helmetprosolutions.com/favicon/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://www.helmetprosolutions.com/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://www.helmetprosolutions.com/favicon/favicon-16x16.png' }
        
      ],
      script: [
              {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "url": "https://www.helmetprosolutions.com",
                  "logo": "https://www.helmetprosolutions.com/logo.png"
                }),
              },
              {
                src: 'https://embed.tawk.to/67243b532480f5b4f5971b2a/1ibioffge',
                type: 'text/javascript',
                hid: 'tawk-to',
                async: true,
                crossorigin: 'anonymous'
              }
              // {
              //   hid: 'tawk-to',
              //   innerHTML: `
              //     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              //     (function(){
              //       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              //       s1.async=true;
              //       s1.src='https://embed.tawk.to/67243b532480f5b4f5971b2a/1ibioffge';
              //       s1.charset='UTF-8';
              //       s1.setAttribute('crossorigin','*');
              //       s0.parentNode.insertBefore(s1,s0);
              //     })();
              //   `,
              //   type: 'text/javascript',
              // }
            ],
            // __dangerouslyDisableSanitizersByTagID: {
            //   'tawk-to': ['innerHTML']
            // }
    }
  },

  
  runtimeConfig: {
    // This will make currencyKey available in browser as process.env.CURRENCY_API_KEY using -> const { currencyKey } = useRuntimeConfig() 
    // Check -> ([code].js file)
    currencyKey: process.env.CURRENCY_API_KEY
  },
  compatibilityDate: '2024-08-20',
  
})