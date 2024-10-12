<template>
  <div>
    <ProductHero />
    <ProductFeatures />
    <ProductAbout />  
    <ProductReviews />

    <ContactUs />
  </div>
</template>

<script setup>
import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductAbout from '~/components/ProductAbout.vue';
import ProductBenefits from '~/components/ProductBenefits.vue';
import ProductReviews from '@/components/ProductReviews.vue';
import CallToAction from '@/components/CallToAction.vue';
import ContactUs from '~/components/ContactUs.vue';
</script>
