<template>
  <section  class="bg-gradient-to-r from-blue-100 to-teal-100 ">
    <div  class=" custom-bg-image min-h-screen flex flex-col items-center justify-center p-6 ">
      <div ref="title" class="bg-white pt-5 px-10 shadow-lg text-center justify-center rounded-3xl">
        <h1 id="product2"  class="text-5xl font-bold mb-4 text-center text-indigo-600">Introducing Helmet Pro</h1>
        <p ref="paragraph" class="text-lg text-black mb-8 text-center max-w-3xl">
          Helmet Pro is an innovative vending machine designed specifically for cleaning helmets. This page provides a summary of its features and benefits, showcasing how it can enhance the safety and comfort of your riding experience.
        </p>
      </div>
      <!-- Desktop view -->
      <div  class=" lg:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div
          ref="card"
          v-for="(image, index) in images"
          :key="index"
          class="bg-gradient-to-b from-blue-300 to-teal-300 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
        >
          <img :src="image.src" :alt="image.alt" class="object-cover rounded-lg transform transition-transform hover:scale-105" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';

const { setupAnimations } = useAnimations();
const title = ref(null);
const paragraph = ref(null);
const card = ref([]);
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
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
]);


</script>

<style scoped>

</style>
