<template>
  <div>

    <ProductHero  />
    <ProductFeatures  />
    <Video  />
    <ProductAbout  />  
    <BookNow />
    <WayToEarn />
    <Facts />
    <ProductHero2  />
    <ProductReviews />
    <!-- <ContactUs  /> -->
    <InquiryForm />
    
  </div>
</template>

<script setup>
import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductAbout from '~/components/ProductAbout.vue';
import ProductReviews from '~/components/ProductReviews.vue';
import Video from '~/components/Video.vue';
import BookNow from '~/components/BookNow.vue';
import InquiryForm from '~/components/InquiryForm.vue';
import WayToEarn from '~/components/WayToEarn.vue';
import Facts from '~/components/Facts.vue';
</script>
