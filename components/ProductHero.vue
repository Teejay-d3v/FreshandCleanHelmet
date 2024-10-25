<template>
  <div>
    <section id="product1-section" class="bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 xl:py-28 shadow-2xl">
      <div class="flex justify-center items-center lg:px-5">
        <div class="w-full flex flex-wrap bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="lg:w-2/4 w-full flex p-8 bg-gray-50">

            <!-- Thumbnail Slider Section with Custom Arrows -->
            <div id="thumbnail-slider" class="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mr-4 h-[730px] w-36 flex flex-col relative">
              <div class="splide__track">
                <ul class="splide__list flex flex-col">
                  <li v-for="(image, index) in images" :key="image" class="splide__slide mb-2 p-5" @mouseover="mainSlider.go(index)">
                    <img :src="image" alt="Thumbnail" class="w-36 h-28 object-cover rounded-lg cursor-pointer hover:border-2 hover:border-black" />
                  </li>
                </ul>
              </div>
            </div>

            <!-- Main Slider Section with Custom Arrows -->
              <!-- Main Slider Section with Custom Arrows -->
              <div id="main-slider" class="splide flex flex-col justify-center w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div class="main-arrow left-0" @click="mainSlider.go('<')">❮</div>
                <div class="splide__track">
                  <ul class="splide__list">
                    <li v-for="(image, index) in images" :key="image" class="splide__slide">
                      <template v-if="image.endsWith('.mp4')">
                        <video controls class="w-full h-auto object-cover rounded-lg">
                          <source :src="image" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </template>
                      <template v-else>
                        <img :src="image" alt="Product Image" class="w-full h-auto object-cover rounded-lg" />
                      </template>
                    </li>
                  </ul>
                </div>
                <div class="main-arrow right-0" @click="mainSlider.go('>')">❯</div>
              </div>

          </div>

          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-10 bg-white flex flex-col lg:mt-20 shadow-lg hover:shadow-2xl rounded-3xl transition-all duration-300">
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
  '/hpro.mp4',
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

onMounted(() => {
  mainSlider = new Splide('#main-slider', { type: 'fade', pagination: false, arrows: false }).mount();
  thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth: 80,
    fixedHeight: 80,
    gap: 8,
    isNavigation: true,
    pagination: false,
    cover: true,
    arrows: false,
    direction: 'ttb' // For vertical alignment
  }).mount();
  mainSlider.sync(thumbnailSlider);
});
</script>

<style scoped>
.main-arrow, .thumbnail-arrow {
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

.main-arrow:hover, .thumbnail-arrow:hover {
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

.thumbnail-arrow.top-0 {
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.thumbnail-arrow.bottom-0 {
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>

