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
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About HelmetPro",
          "description": "Learn more about HelmetPro and our mission.",
          "url": "https://www.helmetprosolutions.com/about"
        }),
      }
    ]
  }
});
</script>

<style scoped>

</style>