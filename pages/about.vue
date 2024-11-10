<template>
  <div>
    <BackStory />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const canonicalUrl = computed(() => `https://www.helmetprosolutions.com${route.path}`)


definePageMeta({
  layout: 'custom-layout',
  name: 'ABOUT',
  head: {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl.value
      }
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'Discover HelmetPro and our commitment to revolutionizing helmet hygiene with our advanced vending machines that offer convenience and cleanliness.' },
      { hid: 'keywords', name: 'keywords', content: 'HelmetPro, helmet hygiene, vending solutions, innovative cleaning, convenience, hygiene machines' }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About HelmetPro",
          "description": "Discover HelmetPro and our  commitment to revolutionizing helmet hygiene with our advanced vending machines that offer convenience and cleanliness.",
          "url": "https://www.helmetprosolutions.com/about"
        }),
      }
    ]
  }
});

</script>

<style scoped>

</style>