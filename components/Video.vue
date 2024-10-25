<template>
  <div>
    <section class="bg-gradient-to-r from-blue-300 to-teal-100 md:bg-gradient-to-r  md:from-blue-300  md:to-teal-100 pb-52 lg:pb-20">
      <div class="flex flex-col text-center w-full mx-auto px-4">
        <h1 class="text-5xl font-bold text-white mt-10 md:text-indigo-600 mb-2">Walkthrough</h1>
        <p class="text-black text-center text-3xl">Watch this video to see how it works!</p>
      </div>
      <div class="flex flex-col items-center justify-center py-2 lg:min-h-[80vh]">
        <div class="relative w-full max-w-xl md:max-w-3xl lg:max-w-7xl xl:max-w-8xl border-8 border-white rounded-lg shadow-lg overflow-hidden">
          <video
            src="/hpro.mp4"
            :controls="controls"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            class="w-full h-full object-cover"
          ></video>

        </div>
        <div class="max-w-xl w-full bg-white rounded-lg shadow-md md:p-4 md:mt-4 mt-20">
          <p class="text-sm">
            This video provides a step-by-step guide on how to use the HelmetPro Cleaning Vending Machine, showcasing its features, from efficient helmet sanitization to eco-friendly operation, ensuring your helmet is fresh, clean, and ready to wear.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props for the video component
defineProps({

  controls: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Additional scoped styles can go here if needed */
</style>
