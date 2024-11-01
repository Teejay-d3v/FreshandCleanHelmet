<template>
  <div>
    <ProductHero  />
    <ProductFeatures  />
    <ProductAbout />
    <Video  />
    <BookNow />
    <!-- <ProductHero2  /> -->
   <!-- <ProductReviews /> -->
    <InquiryForm />

  </div>
</template>

<script setup>
definePageMeta({
  head: {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HelmetPro",
          "url": "https://www.helmetprosolutions.com",
          "description": "Discover the Future of Helmet Cleaning! A vending machine that automatically cleans helmets for hygiene and convenience.",
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
import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductReviews from '~/components/ProductReviews.vue';
import Video from '~/components/Video.vue';
import BookNow from '~/components/BookNow.vue';
import InquiryForm from '~/components/InquiryForm.vue';
</script>
