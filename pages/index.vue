<template>
  <div>
    <ProductHero  />
    <ProductAbout />
    <ProductFeatures  />
    <!-- <Video  /> -->
    <BookNow />
    <InquiryForm />
  </div>
</template>

<script setup>
definePageMeta({
  head: {
    link: [
      {
        rel: 'canonical',
        href: 'https://www.helmetprosolutions.com/'
      }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Learn more about HelmetPro, our mission, and how we provide innovative helmet cleaning vending machines that prioritize hygiene and convenience for riders.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'HelmetPro, helmet cleaning, vending machines, hygiene, convenience, innovative solutions, rider safety'
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
          "description": "Discover the Future of Helmet Cleaning! HelmetPro offers an innovative helmet cleaning vending machine that automatically maintains hygiene and convenience for riders, revolutionizing helmet care.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.helmetprosolutions.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
      }
    ]
  }
});

import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
// import Video from '~/components/Video.vue';
import BookNow from '~/components/BookNow.vue';
import InquiryForm from '~/components/InquiryForm.vue';
</script>


<style>

</style>
