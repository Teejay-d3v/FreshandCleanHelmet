<template>
  <div class="bg-gray-300 py-24">
    <!-- Section One -->
    <section class="bg-gray-300">
      <div class="container mx-auto flex flex-col md:flex-row items-center rounded-3xl bg-gradient-to-b from-blue-300 to-teal-300">
        <div ref="image1" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Deep-Clean Technology" src="/public/images/product4.png">
        </div>
        <div ref="paragraph1" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 pl-10">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Deep-Clean Technology</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Experience 360 Degrees of Clean with Zero Dead Ends! Our innovative Helmet Cleaning Vending Machine guarantees a thorough dry clean that leaves no corner untouched. Say goodbye to dirt and odors while ensuring your helmet is sanitized and ready for your next adventure.
          </p>
          <button @click="openModal" class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
              Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Section Two -->
    <section class="bg-gray-300 py-5">
      <div class="container mx-auto flex flex-col md:flex-row-reverse items-center rounded-3xl bg-gradient-to-b from-blue-300 to-teal-300">
        <div ref="image2" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Turbo-Dry System" src="/public/images/product2.png">
        </div>
        <div ref="paragraph2" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 pr-10">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Turbo-Dry System</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Our Helmet Cleaning Vending Machine utilizes advanced technology to deliver high-temperature drying and a strong stereo airflow, ensuring your helmets dry quickly and effectively. Experience the power of efficient drying that leaves your gear in pristine condition.
          </p>
          <button @click="openModal" class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
              Discover More
          </button>
        </div>
      </div>
    </section>

    <!-- Section Three -->
    <section class="bg-gray-300 py-5">
      <div class="container mx-auto flex flex-col md:flex-row items-center rounded-3xl bg-gradient-to-b from-blue-300 to-teal-300">
        <div ref="image3" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Bacteria-Busting Power" src="/public/images/product3.png">
        </div>
        <div ref="paragraph3" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 pl-10">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Bacteria-Busting Power</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Kill 99.9% of Germs and Bacteria for Long-Lasting Freshness! Our Helmet Cleaning Vending Machine is designed to eliminate harmful germs, providing you with peace of mind and a safe, clean helmet every time.
          </p>
          <button @click="openModal" class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
              Find Out More
          </button>
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
