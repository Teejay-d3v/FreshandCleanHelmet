<template>
  <div>
    <section>
      <div class="h-1/2">
        <div class="relative overflow-hidden">
          <!-- Slider Images -->
          <div
            class="slider flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <img src="/images/1.png" alt="Helmet Fresh" class="w-full flex-shrink-0" />
            <img src="/images/2.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" />
            <img src="/images/3.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" />
            <img src="/images/4.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" />
            <img src="/images/5.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" />
          </div>

          <!-- Slider Controls -->
          <button
            @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 flex items-center justify-center"
          >
            <span class="material-icons">chevron_left</span>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 flex items-center justify-center"
          >
            <span class="material-icons">chevron_right</span>
          </button>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentSlide = ref(0);
const totalSlides = 5;
let autoSlideInterval;

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

// Auto slide function
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000); // Change slide every 3 seconds
};

// Clear interval before component is unmounted
onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});

// Start auto slide when component is mounted
onMounted(() => {
  startAutoSlide();
});
</script>

<style scoped>
.slider {
  width: 100%;
  height: auto;
}

button {
  transition: all 0.3s ease;
}

/* Add additional styles for the buttons */
button:hover {
  transform: scale(1.1);
}
</style>
