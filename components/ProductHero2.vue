<template>
  <section class="bg-gray-300">
    <div class="min-h-screen flex flex-col items-center justify-center ">
      <h1 ref="title" class="text-5xl font-bold mb-6 text-center">Introducing Helmet Pro</h1>
      <p ref="paragraph" class="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        Helmet Pro is an innovative vending machine designed specifically for cleaning helmets. This page provides a summary of its features and benefits, showcasing how it can enhance the safety and comfort of your riding experience.
      </p>
      <div class="flex gap-4">
        <div
          ref="card"
          v-for="(image, index) in images"
          :key="index"
          class="bg-gradient-to-b from-blue-300 to-teal-300 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
        >
          <img :src="image.src" :alt="image.alt" class="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';
const { setupAnimations } = useAnimations();
const card = ref([])
const title = ref(null)
const paragraph = ref(null)

// Array of image objects
const images = ref([
  { src: '/images/set1.png', alt: 'Image 1' },
  { src: '/images/set2.png', alt: 'Image 2' },
  { src: '/images/set3.png', alt: 'Image 3' },
]);

// Setup animation for each image
setupAnimations([
  {
    element: card.value,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.5, easing: 'ease-out' }
  },
  {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
])
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
