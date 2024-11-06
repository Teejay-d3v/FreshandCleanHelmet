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
    link: [
      {
        rel: 'canonical',
        href: 'https://www.helmetprosolutions.com/about'
      }
    ],
    meta: [
            { hid: 'description', name: 'description', content: 'Learn more about HelmetPro, our mission, and how we provide innovative helmet cleaning vending machines for hygiene and convenience.' },
            { hid: 'keywords', name: 'keywords', content: 'HelmetPro, helmet cleaning, vending machines, hygiene, convenience' }
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
      },
      {
        type: 'text/javascript',
        innerHTML: `
          // Start of HubSpot Embed Code
          (function(d,s,i,r){i['HubSpotAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();s=d.createElement(s),
          i=d.getElementsByTagName(s)[0];s.async=1;s.src="//js.hs-scripts.com/48016608.js";
          i.parentNode.insertBefore(s,i)})(document,"script","hs");`,
      },
    ]
  }
});
</script>

<style scoped>

</style>