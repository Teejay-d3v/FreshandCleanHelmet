<template>
  <div>
    <BackStory />
  </div>
</template>

<script setup>



definePageMeta({
  layout: 'custom-layout',
  name: 'ABOUT',
  head: {
    meta: [
            { hid: 'description', name: 'description', content: 'Learn more about HelmetPro, our mission, and how we provide innovative helmet cleaning vending machines for hygiene and convenience.' },
            { hid: 'keywords', name: 'keywords', content: 'HelmetPro, helmet cleaning, vending machines, hygiene, convenience' }
            { hid: 'canonical', rel: 'canonical', href: 'https://www.helmetprosolutions.com/about' } 
          ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About HelmetPro",
          "description": "Learn more about HelmetPro, our mission, and how we provide innovative helmet cleaning vending machines for hygiene and convenience.",
          "url": "https://www.helmetprosolutions.com/about"
        }),
      }
    ]
  }
});
</script>

<style scoped>

</style>