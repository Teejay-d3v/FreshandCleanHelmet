<template>
  <div>
    <section id="productfeatures-section" style="background: linear-gradient(135deg, #e0e0e0, #f0f0f0);" class="relative overflow-hidden py-24  bg-slate-00">
      <div class="h-1/2">
        <!-- Slider Images -->
        <div
          class="slider flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          @touchstart="startTouch"
          @touchmove="moveTouch"
          @touchend="endTouch"
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
          aria-label="Previous slide"
          class="absolute left-4 top-1/2  bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 hidden lg:block"
        >
          <span class="material-icons">chevron_left</span>
        </button>
        <button
          @click="nextSlide"
          aria-label="Next slide"
          class="absolute right-4 top-1/2  bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 hidden lg:block"
        >
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentSlide = ref(0);
const totalSlides = 5;
let autoSlideInterval;

// Touch event variables
let startX = 0;
let endX = 0;

// Navigate to the previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

// Navigate to the next slide
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

// Touch event handlers
const startTouch = (event) => {
  startX = event.touches[0].clientX;
};

const moveTouch = (event) => {
  endX = event.touches[0].clientX;
};

const endTouch = () => {
  if (startX - endX > 50) {
    // Swiped left
    nextSlide();
  } else if (endX - startX > 50) {
    // Swiped right
    prevSlide();
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: auto;
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.1);
}

/* Additional styles for better responsiveness */
@media (max-width: 640px) {
  button {
    px: 3;
    py: 1.5;
  }
}

@media (min-width: 640px) {
  button {
    px: 4;
    py: 2;
  }
}
</style>
