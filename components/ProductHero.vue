<template>
  <section>
    <div class="hidden lg:block">
      <DesktopView />
    </div>
    <div class="block lg:hidden">
      <MobileView />
    </div>
  </section>
</template>

<script setup>
import DesktopView from "/components/product-hero/ProductDesktop.vue";
import MobileView from "/components/product-hero/ProductMobile.vue";

definePageMeta({
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Keep your helmet fresh and sanitized with our Automatic Intelligent Helmet Cleaning Machine. It offers fast and efficient dry cleaning, thorough disinfection, and effective deodorization, all in one sleek, user-friendly machine. Designed for convenience, this is the ultimate solution for helmet hygiene and care.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'HelmetPro, helmet cleaning, Helmet Cleaning, helmet cleaning vending machine, vending machines, hygiene, convenience, innovative solutions, rider safety, helmetpro, helmet pro, helmetprosolutions, ' 
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HelmetPro",
          "url": "https://www.helmetprosolutions.com",
          "description": "Discover the Future of Helmet Cleaning! Keep your helmet fresh and sanitized with our Automatic Intelligent Helmet Cleaning Machine. It offers fast and efficient dry cleaning, thorough disinfection, and effective deodorization, all in one sleek, user-friendly machine. Designed for convenience, this is the ultimate solution for helmet hygiene and care.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.helmetprosolutions.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      },
    ]
  }
});

</script>

<style  scoped>

</style>