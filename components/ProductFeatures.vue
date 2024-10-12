<template>
    <section>
      <div class="h-1/2">
        <div class="relative overflow-hidden">
          <!-- Slider Images -->
          <div class="slider flex transition-transform duration-500" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <img src="/images/1.png" alt="Helmet Fresh" class="w-full flex-shrink-0" />
            <img src="/images/2.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" />
            <img src="/images/3.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" />
            <img src="/images/4.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" />
            <img src="/images/5.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" />
          </div>

          <!-- Slider Controls -->
          <button 
            @click="prevSlide" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-bold hover:bg-green-700 transition duration-300 opacity-90 hover:opacity-100"
          >
            ◀
          </button>
          <button 
            @click="nextSlide" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-bold hover:bg-green-700 transition duration-300 opacity-90 hover:opacity-100"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const currentSlide = ref(0);
const totalSlides = 5; 

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};
</script>
