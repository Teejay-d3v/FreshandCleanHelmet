<template>
  <div>
    <section id="product1-section" class="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 py-20 shadow-2xl">
      <div class=" mx-auto px-5">
        <div class="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- Main Slider Section -->
          <div class="lg:w-2/4 w-full flex flex-col items-center justify-center p-8 bg-gray-50">
            <div id="main-slider" class="splide w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="image in images" :key="image" class="splide__slide">
                    <img :src="image" ref="image1" alt="Helmet Clean and Fresh Machine" class="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
                  </li>
                </ul>
              </div>
            </div>

            <!-- Thumbnail Slider Section -->
            <div id="thumbnail-slider" class="splide mt-4 w-full">
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="image in images" :key="image" class="splide__slide">
                    <img :src="image" ref="image2" alt="Thumbnail" class="w-20 h-20 object-cover rounded-lg cursor-pointer hover:shadow-lg transition duration-300" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-10 bg-white flex flex-col justify-between shadow-lg hover:shadow-2xl rounded-3xl transition-all duration-300">
            <!-- Product Title -->
            <div>
              <h2 class="text-sm title-font text-indigo-600 tracking-widest uppercase mb-2">Clean and Fresh</h2>
              <h1 class="text-gray-900 text-4xl title-font font-bold mb-4">Helmet Cleaning Vending Machine</h1>

              <!-- Rating and Reviews -->
              <div class="flex items-center mb-4">
                <div class="flex items-center">
                  <svg v-for="n in 4" :key="n" fill="currentColor" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  <svg fill="none" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <span class="text-gray-600 ml-3">8,230 Reviews</span>
              </div>

              <!-- Product Description -->
              <p class="leading-relaxed mb-6 text-gray-700 text-lg">
                Experience the ultimate solution for maintaining your helmet's hygiene with our Automatic Intelligent Helmet Cleaning Machine. Enjoy quick dry cleaning, disinfection, and deodorization all in one convenient machine.
              </p>
            </div>

            <!-- Pricing Section -->
            <div class="flex items-center justify-between bg-indigo-100 p-6 rounded-lg shadow-inner mt-8">
              <span class="title-font font-semibold text-4xl text-indigo-700">{{ formattedPrice }}</span>
              <button @click="openModal" class="text-white bg-indigo-600 border-0 py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent :isVisible="isModalOpen" @close="closeModal" />
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import Splide from '@splidejs/splide';
import ModalComponent from '../components/payments.vue';

const price = ref(3580.00);
const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price.value);
});

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

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
  const mainSlider = new Splide('#main-slider', { type: 'fade', pagination: false, arrows: false }).mount();
  const thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth: 80,
    fixedHeight: 80,
    gap: 8,
    isNavigation: true,
    focus: 'center',
    pagination: false,
    cover: true,
  }).mount();
  mainSlider.sync(thumbnailSlider);
});
</script>

<style scoped>
.splide__slide img {
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
}
.splide__slide.is-active img {
  border: 2px solid #4F46E5; /* Tailwind Indigo 500 */
  transform: scale(1.05);
}
</style>
