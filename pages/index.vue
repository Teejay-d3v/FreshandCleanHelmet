<template>
  <div>
    <ProductHero  />
    <ProductFeatures  />
    <ProductAbout />
    <Video  />
    <BookNow />
    <!-- <ProductHero2  /> -->
    <ProductReviews />
    <InquiryForm />

  </div>
</template>

<script setup>
import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductReviews from '~/components/ProductReviews.vue';
import Video from '~/components/Video.vue';
import BookNow from '~/components/BookNow.vue';
import InquiryForm from '~/components/InquiryForm.vue';
</script>
