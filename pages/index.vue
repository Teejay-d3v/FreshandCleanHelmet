<template>
  <div>
    <ProductHero  />
    <ProductFeatures  />
    <Video  />
    <ProductAbout  />  




    <ProductHero2  />
    <ProductReviews />
    <ContactUs  />
  
  </div>
</template>

<script setup>
import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductAbout from '~/components/ProductAbout.vue';
import ContactUs from '~/components/ContactUs.vue';
import ProductReviews from '~/components/ProductReviews.vue';
import Video from '~/components/Video.vue';
</script>
