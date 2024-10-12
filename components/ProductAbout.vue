<template>
  <div>
  <section class="text-gray-600 body-font pt-24">    
    <div class="px-8 mx-auto flex  md:flex-row flex-col items-center">
      <div ref="firstImage" class="w-full md:w-1/2  flex justify-center mb-10 md:mb-0"> 
        <img class="object-cover object-center w-full rounded-3xl h-auto "
        alt="team" src="/public/images/product4.png">
      </div>

      <div ref="paragraph1" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-left md:p-8">
        <h2 class="py-4 text-gray-900">Deep-Clean Technology</h2>
          <p>Experience 360 Degrees of Clean with Zero Dead Ends!
            Our innovative Helmet Cleaning Vending Machine guarantees a thorough dry clean that leaves no corner untouched. Say goodbye to dirt and odors while ensuring your helmet is sanitized and ready for your next adventure. Perfect for excess or returned inventory, our solution provides a quick and efficient way to generate liquidity and manage surplus assets effortlessly.</p>
      </div>
    </div>
  </section>

    <!-- Second Section -->
    <section class="text-gray-600 body-font">
      <div class="px-8 mx-auto flex  md:flex-row flex-col items-center">
        <!-- Mobile view -->
        <div class="block md:hidden w-full justify-center"> 
          <img class="object-cover object-center w-full h-auto rounded-3xl" 
          alt="team" src="/public/images/product2.png">
        </div>

        <div ref="paragraph2" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-left p-8 md:p-0 mb-10 md:mb-0">
          <h2 class="py-4 text-gray-900">Turbo-Dry System</h2>
            <p>Our Helmet Cleaning Vending Machine utilizes advanced technology to deliver high-temperature drying and a strong stereo airflow, ensuring your helmets dry quickly and effectively. Experience the power of efficient drying that leaves your gear in pristine condition, ready for the next ride.</p>
        </div>

        <!-- Desktop view -->
        <div ref="secondImage" class="hidden md:block w-full md:w-1/2 justify-center"> 
          <img class="object-cover object-center w-full h-auto rounded-3xl" 
          alt="team" src="/public/images/product2.png">
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
    <div class="px-8 mx-auto flex  md:flex-row flex-col items-center mb-8">
      <div ref="firstImage" class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"> 
        <img class="object-cover object-center w-full h-auto rounded-3xl"
        alt="team" src="/public/images/product3.png">
      </div>

      <div ref="paragraph3" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-left md:p-8">
        <h2 class="py-4 text-gray-900">Bacteria-Busting Power</h2>
        <p>Kill 99.9% of Germs and Bacteria for Long-Lasting Freshness!
          Our Helmet Cleaning Vending Machine is designed to eliminate 99.9% of harmful germs and bacteria, providing you with peace of mind and a safe, clean helmet every time. Experience long-lasting freshness that keeps your gear hygienic and ready for every adventure.</p>
      </div>
    </div>
  </section>


  </div>
  
</template>

<script setup>

import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
const title1= ref(null)
const title2 = ref(null)
const title3 = ref(null)
const paragraph1 = ref(null)
const paragraph2 = ref(null)
const paragraph3 = ref(null)
const { setupAnimations } = useAnimations()

setupAnimations([
  {
    element: title1,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title2,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title3,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph3,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },

])
</script>

<style scoped>

</style>
