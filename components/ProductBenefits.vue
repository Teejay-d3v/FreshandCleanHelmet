<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container py-24 mx-auto">
      <div class="lg:w-full mx-auto h-auto flex flex-wrap bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Preview Image Section -->
        <div class="lg:w-2/4 w-full flex flex-col items-center lg:items-start lg:justify-start justify-center p-8">
          <img
            alt="Helmet Clean and Fresh Machine"
            class="w-full h-auto object-cover object-center rounded-lg transition-transform duration-300"
            :src="currentImage"
          />
            <!-- Thumbnail List Section -->
            <div class="mt-4 flex items-center">
              <button 
                @click="prevImage" 
                class="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-200"
              >
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <div class="flex overflow-x-auto space-x-5 mx-4">
                <img 
                  src="/images/machine1.png" 
                  alt="Thumbnail 1" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine1.png' }"
                  @click="changeImage('/images/machine1.png')"
                />
                <img 
                  src="/images/machine2.png" 
                  alt="Thumbnail 2" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine2.png' }"
                  @click="changeImage('/images/machine2.png')"
                />
                <img 
                  src="/images/machine3.png" 
                  alt="Thumbnail 3" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine3.png' }"
                  @click="changeImage('/images/machine3.png')"
                />
                <img 
                  src="/images/machine4.png" 
                  alt="Thumbnail 4" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine4.png' }"
                  @click="changeImage('/images/machine4.png')"
                />
                <img 
                  src="/images/machine5.png" 
                  alt="Thumbnail 5" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine5.png' }"
                  @click="changeImage('/images/machine5.png')"
                />
                <img 
                  src="/images/machine6.png" 
                  alt="Thumbnail 6" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine6.png' }"
                  @click="changeImage('/images/machine5.png')"
                />
                <img 
                  src="/images/machine7.png" 
                  alt="Thumbnail 7" 
                  class="w-24 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200"
                  :class="{ 'border-2 border-indigo-500': currentImage === '/images/machine7.png' }"
                  @click="changeImage('/images/machine5.png')"
                />
              </div>
              <button 
                @click="nextImage" 
                class="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-200"
              >
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </button>
            </div>
        </div>

        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center items-center">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
          <h1 class="text-gray-900 text-3xl title-font font-semibold mb-4">Helmet Clean and Fresh Machine</h1>
          
          <div class="flex mb-4">
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
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
              <a class="text-gray-500 hover:text-indigo-500 transition duration-300 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="text-gray-500 hover:text-indigo-500 transition duration-300 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="text-gray-500 hover:text-indigo-500 transition duration-300 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 12.5a2.5 2.5 0 01-2.5 2.5h-3v3H10v-3H6.5A2.5 2.5 0 014 12.5 2.5 2.5 0 016.5 10h3V7h4v3h3.5A2.5 2.5 0 0121 12.5z"></path>
                </svg>
              </a>
            </span>
          </div>

          <p class="leading-relaxed">
            This Helmet Clean and Fresh Machine offers an effective way to keep your helmets clean and smelling fresh. Its advanced cleaning technology ensures a thorough clean without damaging the helmet's materials.
          </p>

          <div class="flex">
            <div>
              <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
            </div>
            <div>
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  '/images/machine1.png',
  '/images/machine2.png',
  '/images/machine3.png',
  '/images/machine4.png',
  '/images/machine5.png',
  '/images/machine6.png',
  '/images/machine7.png',
];

const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);

const changeImage = (image) => {
  currentImage.value = image;
  currentIndex.value = images.indexOf(image);
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  currentImage.value = images[currentIndex.value];
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
  currentImage.value = images[currentIndex.value];
};
</script>

<style scoped>
/* Optional: Custom styles for better appearance */
</style>
