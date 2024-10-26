<template>
  <div>
    <section id="product1-section" class="bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 xl:py-28 shadow-2xl">
      <div class="flex justify-center items-center lg:px-5">
        <div class="w-full flex flex-wrap bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="lg:w-[70%] h-[800px] w-full flex p-8 bg-gray-50">
            <div class="relative">
              <!-- Arrow Up -->
              <div class="absolute top-0 -mt-1 ml-12 cursor-pointer z-50" @click="thumbnailSlider.go('<')">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" class="bg-white rounded-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                  <path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z"/>
                </svg>
              </div>
              <!-- Thumbnail Slider -->
              <div id="thumbnail-slider" class="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mr-4 h-[735px] w-36 flex flex-col relative">
                <div class="splide__track">
                  <ul class="splide__list flex flex-col">
                    <li v-for="(thumbnail, index) in thumbnails" :key="thumbnail" class="splide__slide mb-2 p-5" @mouseover="goToSlide(index) ">
                      <img :src="thumbnail" alt="Thumbnail" class="w-36 h-22 object-cover rounded-lg cursor-pointer hover:border-2 hover:border-black" />
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Arrow Down -->
              <div class="absolute bottom-0 mb-2 ml-12 cursor-pointer" @click="thumbnailSlider.go('>')">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-white rounded-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                  <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
                </svg>
              </div>
            </div>
            <!-- Main Slider  -->
            <div id="main-slider" class="splide flex flex-col bg-slate-100 object-contain w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              <div class="main-arrow left-0" @click="mainSlider.go('<')">❮</div>
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="(media, index) in images" :key="media" class="splide__slide">
                    <template v-if="media.endsWith('.mp4')">
                       <video controls class="w-full max-h-[700px] my-32 object-contain rounded-lg bg-black" :src="media"></video>
                    </template>
                    <template v-else>
                      <img :src="media" alt="Helmet Clean and Fresh Machine" class="w-full max-h-[700px] max-w-[1200px] bg-black object-contain rounded-lg" />
                    </template>
                  </li>
                </ul>
              </div>
              <div class="main-arrow right-0" @click="mainSlider.go('>')">❯</div>
            </div>

          </div>

          <!-- Product Details Section -->
          <div class="lg:w-[30%] w-full p-10 bg-white flex flex-col lg:mt-20 shadow-lg hover:shadow-2xl rounded-3xl transition-all duration-300">
            <div class="flex flex-col justify-center">
              <h2 class="text-sm title-font text-indigo-600 tracking-widest uppercase mb-2">Clean and Fresh</h2>
              <h1 class="leading-snug text-gray-900 text-xl lg:text-5xl title-font font-bold mt-10 mb-14">Helmet Cleaning Vending Machine</h1>

              <div class="flex items-center mb-4">
                <div class="flex items-center">
                  <svg v-for="n in 5" :key="n" fill="currentColor" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <span class="text-gray-600 ml-3">215 Reviews</span>
              </div>

              <!-- Product Description -->
              <p class="leading-relaxed mb-6 text-gray-700 text-sm lg:text-lg">
                Keep your helmet fresh and sanitized with our Automatic Intelligent Helmet Cleaning Machine. It offers fast and efficient dry cleaning, thorough disinfection, and effective deodorization, all in one sleek, user-friendly machine. Designed for convenience, this is the ultimate solution for helmet hygiene and care.
              </p>
              <div class="">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform?usp=send_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Splide from '@splidejs/splide';

const images = [
  '/images/hpro.mp4',
  '/images/machine1.png',
  '/images/machine2.png',
  '/images/machine3.png',
  '/images/machine4.png',
  '/images/machine5.png',
  '/images/machine6.png',
  '/images/machine7.png',
];

const thumbnails = [
  '/images/thumbnailvideo.png',
  '/images/machine1.png',
  '/images/machine2.png',
  '/images/machine3.png',
  '/images/machine4.png',
  '/images/machine5.png',
  '/images/machine6.png',
  '/images/machine7.png',
];

let mainSlider;
let thumbnailSlider;
const currentSlideIndex = ref(0); // Store the index of the current slide

onMounted(() => {
  mainSlider = new Splide('#main-slider', { type: 'fade', pagination: false, arrows: false })
    .on('move', (newIndex) => {
      currentSlideIndex.value = newIndex; // Update current slide index when main slider moves
    })
    .mount();

  thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth: 80,
    fixedHeight: 80,
    gap: 8,
    isNavigation: true,
    pagination: false,
    cover: true,
    arrows: false,
    direction: 'ttb', // For vertical alignment
  }).mount();

  // Sync thumbnail slider with main slider
  mainSlider.sync(thumbnailSlider);
});

// Method to change main slide
const goToSlide = (index) => {
  mainSlider.go(index);
};
</script>

<style scoped>
.main-arrow {
  background-color: white;
  border-radius: 50%; /* Ensures the arrow is a perfect circle */
  width: 2.5rem; /* Set width to ensure circular shape */
  height: 2.5rem; /* Set height to ensure circular shape */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: absolute;
  transition: box-shadow 0.2s;
  z-index: 10;
}

.main-arrow:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.main-arrow.left-0 {
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
}

.main-arrow.right-0 {
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}
</style>
