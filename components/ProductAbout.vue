<template>
  <div>
    <!-- Section One -->
    <section class="bg-indigo-50 ">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div ref="image1" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Deep-Clean Technology" src="/public/images/product4.png">
        </div>
        <div ref="paragraph1" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Deep-Clean Technology</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Experience 360 Degrees of Clean with Zero Dead Ends! Our innovative Helmet Cleaning Vending Machine guarantees a thorough dry clean that leaves no corner untouched. Say goodbye to dirt and odors while ensuring your helmet is sanitized and ready for your next adventure.
          </p>
          <button class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
            <NuxtLink to="/payments">
              Learn More
            </NuxtLink>
          </button>
        </div>
      </div>
    </section>

    <!-- Section Two -->
    <section class="bg-white py-16">
      <div class="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        <div ref="image2" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Turbo-Dry System" src="/public/images/product2.png">
        </div>
        <div ref="paragraph2" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Turbo-Dry System</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Our Helmet Cleaning Vending Machine utilizes advanced technology to deliver high-temperature drying and a strong stereo airflow, ensuring your helmets dry quickly and effectively. Experience the power of efficient drying that leaves your gear in pristine condition.
          </p>
          <button class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
            <NuxtLink to="/payments">
              Discover More
            </NuxtLink>
          </button>
        </div>
      </div>
    </section>

    <!-- Section Three -->
    <section class="bg-indigo-50 py-16">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div ref="image3" class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img class="object-cover w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
            alt="Bacteria-Busting Power" src="/public/images/product3.png">
        </div>
        <div ref="paragraph3" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4">
          <h2 class="text-2xl font-semibold text-indigo-600 py-2">Bacteria-Busting Power</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Kill 99.9% of Germs and Bacteria for Long-Lasting Freshness! Our Helmet Cleaning Vending Machine is designed to eliminate harmful germs, providing you with peace of mind and a safe, clean helmet every time.
          </p>
          <button class="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"  @click="goToPaymentPage">
            <NuxtLink to="/payments">
              Find Out More
            </NuxtLink>
          </button>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';

const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const paragraph1 = ref(null);
const paragraph2 = ref(null);
const paragraph3 = ref(null);
const { setupAnimations } = useAnimations();

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

import { useRouter } from 'vue-router'

const router = useRouter()

const goToPaymentPage = () => {
  router.push('/payments.vue') 
}
</script>

<style scoped>
/* Adding custom hover effects */
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
