<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container py-24 mx-auto">
      <div class="lg:w-full mx-auto h-auto flex flex-wrap bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Main Slider Section -->
        <div class="lg:w-2/4 w-full flex flex-col items-center lg:items-start lg:justify-start justify-center p-8">
          <div id="main-slider" class="splide w-full">
            <div class="splide__track">
              <ul class="splide__list">
                <li v-for="image in images" :key="image" class="splide__slide">
                  <img :src="image" alt="Helmet Clean and Fresh Machine" class="w-full h-auto object-cover object-center rounded-lg" />
                </li>
              </ul>
            </div>
          </div>

          <!-- Thumbnail Slider Section -->
          <div id="thumbnail-slider" class="splide mt-4 w-full">
            <div class="splide__track">
              <ul class="splide__list">
                <li v-for="image in images" :key="image" class="splide__slide">
                  <img :src="image" alt="Thumbnail" class="w-24 h-24 object-cover rounded-lg cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>

      <!-- Product Details Section -->
<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-white shadow-lg rounded-lg p-8">
  <!-- Product Title -->
  <h2 class="text-sm title-font text-indigo-600 tracking-widest uppercase mb-2">Clean and Fresh</h2>
  <h1 class="text-gray-900 text-4xl title-font font-bold mb-4">Helmet Cleaning Vending Machine</h1>
  
  <!-- Rating and Reviews -->
  <div class="flex items-center mb-4">
    <span class="flex items-center">
      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
      <span class="text-gray-600 ml-3">8,230 Reviews</span>
    </span>
    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
      <a class="text-gray-500 hover:text-indigo-500 cursor-pointer transition duration-300">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="text-gray-500 hover:text-indigo-500 cursor-pointer transition duration-300">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="text-gray-500 hover:text-indigo-500 cursor-pointer transition duration-300">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
      </a>
    </span>
  </div>

  <!-- Product Description -->
  <p class="leading-relaxed mb-6 text-gray-700 text-lg">
    Experience the ultimate solution for maintaining your helmet's hygiene with our Automatic Intelligent Helmet Cleaning Machine. Enjoy quick dry cleaning, disinfection, and deodorization all in one convenient machine.
  </p>

  <!-- Pricing Section -->
  <div class="flex items-center justify-between bg-indigo-50 p-6 rounded-lg mt-4 shadow-inner">
    <span class="title-font font-semibold text-4xl text-indigo-700">
      $3580.00
    </span>
    <div class="flex items-center">
      <button class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold shadow-lg focus:outline-none">
        Order Now
      </button>

    </div>
  </div>
</div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

const images = [
  '/images/machine1.png',
  '/images/machine2.png',
  '/images/machine3.png',
  '/images/machine4.png',
  '/images/machine5.png',
  '/images/machine6.png',
  '/images/machine7.png',
];

onMounted(() => {
  const mainSlider = new Splide('#main-slider', {
    type: 'fade',
    pagination: false,
    arrows: false,
  }).mount();

  const thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth: 100,
    fixedHeight: 100,
    gap: 10,
    isNavigation: true,
    focus: 'center',
    pagination: false,
    cover: true,
  }).mount();

  mainSlider.sync(thumbnailSlider);
});


</script>

<style scoped>
/* Custom styles for the thumbnail slider to match your design */
.splide__slide img {
  border: 2px solid transparent;
}

.splide__slide.is-active img {
  border: 2px solid #4F46E5; /* Tailwind Indigo 500 */
}
</style>
