<template>
  <div class="bg-gradient-to-r from-blue-300 to-teal-100 pt-32 pb-10">
    <!-- Section One -->
    <section class="">
      <div class="container mx-auto h-auto flex flex-col md:flex-row items-center rounded-3xl bg-white mb-20 shadow-2xl p-4">
        <div ref="image1" class="w-full flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Deep-Clean Technology" src="/public/images/product4.png">
        </div>
        <div ref="paragraph1" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10">
          <h2 class="text-3xl md:text-5xl font-semibold text-indigo-600 py-2">Deep-Clean Technology</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Experience 360 Degrees of Clean with Zero Dead Ends! Our innovative Helmet Cleaning Vending Machine guarantees a thorough dry clean that leaves no corner untouched. Say goodbye to dirt and odors while ensuring your helmet is sanitized and ready for your next adventure.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Two -->
    <section class="">
      <div class="container mx-auto flex flex-col md:flex-row-reverse items-center rounded-3xl bg-white mb-20 shadow-2xl p-4">
        <div ref="image2" class="w-full flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Turbo-Dry System" src="/public/images/product2.png">
        </div>
        <div ref="paragraph2" class="px-4 md:px-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4">
          <h2 class="text-3xl md:text-5xl font-semibold text-indigo-600 py-2">Turbo-Dry System</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Our Helmet Cleaning Vending Machine utilizes advanced technology to deliver high-temperature drying and a strong stereo airflow, ensuring your helmets dry quickly and effectively. Experience the power of efficient drying that leaves your gear in pristine condition.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Three -->
    <section class="">
      <div class="container mx-auto flex flex-col md:flex-row items-center rounded-3xl bg-white mb-20 shadow-2xl p-4">
        <div ref="image3" class="w-full flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Bacteria-Busting Power" src="/public/images/product3.png">
        </div>
        <div ref="paragraph3" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10">
          <h2 class="text-3xl md:text-5xl font-semibold text-indigo-600 py-2">Bacteria-Busting Power</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Kill 99.9% of Germs and Bacteria for Long-Lasting Freshness! Our Helmet Cleaning Vending Machine is designed to eliminate harmful germs, providing you with peace of mind and a safe, clean helmet every time.
          </p>
        </div>
      </div>
    </section>

    <ModalComponent :isVisible="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';
import ModalComponent from '../components/payments.vue';

const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const paragraph1 = ref(null);
const paragraph2 = ref(null);
const paragraph3 = ref(null);
const isModalOpen = ref(false); // State to control modal visibility

const { setupAnimations } = useAnimations();

const openModal = () => {
  isModalOpen.value = true; // Set modal visibility to true
};

const closeModal = () => {
  isModalOpen.value = false; // Set modal visibility to false
};

setupAnimations([
  {
    element: image1,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: image2,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: image3,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { y: ['-20%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { y: ['-20%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph3,
    props: { y: ['-20%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  }
]);
</script>

<style scoped>
img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #4F46E5; /* Indigo 600 for headers */
}

p {
  max-width: 600px; /* Limit paragraph width for better readability */
}

button {
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}
</style>
