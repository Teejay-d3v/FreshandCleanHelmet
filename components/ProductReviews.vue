<template>
  <div>
    <section class="text-gray-600 body-font bg-gradient-to-r from-blue-300 to-teal-100">
      <div class="px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-5xl font-bold text-indigo-600">Testimonials</h1>
          <p class="text-black text-3xl">What our happy users say!</p>
        </div>

        <!-- Splide Slider -->
        <div id="testimonial-slider" class="splide" aria-label="Testimonials">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <div class="p-6 border-2 rounded-lg bg-white transform transition duration-500">
                  <div class="h-full text-center">
                    <p class="leading-relaxed text-gray-700 italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem architecto provident modi aut sunt sint qui quo quae alias?"</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <div class="flex items-center justify-center">
                      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="https://dummyimage.com/302x302">
                      <div class="ml-4 text-left">
                        <div class="flex mb-1">
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-gray-300 text-2xl">★</span>
                        </div>
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">Alex Morgan</h2>
                        <p class="text-gray-500">Senior Product Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="splide__slide">
                <div class="p-6 border-2 rounded-lg bg-white shadow-lg transform transition duration-500">
                  <div class="h-full text-center">
                    <p class="leading-relaxed text-gray-700 italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto laudantium recusandae voluptatem, fugiat, optio dolores voluptate asperiores soluta quidem totam molestiae odio explicabo numquam minus reprehenderit deserunt."</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <div class="flex items-center justify-center">
                      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="https://dummyimage.com/302x302">
                      <div class="ml-4 text-left">
                        <div class="flex mb-1">
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">Sophie Turner</h2>
                        <p class="text-gray-500">Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="splide__slide">
                <div class="p-6 border-2 rounded-lg bg-white shadow-lg transform transition duration-500">
                  <div class="h-full text-center">
                    <p class="leading-relaxed text-gray-700 italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem architecto provident modi aut sunt sint qui quo quae alias?"</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <div class="flex items-center justify-center">
                      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="https://dummyimage.com/302x302">
                      <div class="ml-4 text-left">
                        <div class="flex mb-1">
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-gray-300 text-2xl">★</span>
                        </div>
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">Michael Tan</h2>
                        <p class="text-gray-500">Marketing Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- More slides as per your testimonials -->
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

onMounted(() => {
  new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 1, // Adjusted to 1 for mobile responsiveness
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
      1440: {
        perPage: 3,
      },
      1921: {
        perPage: 3,
      },
    },
    gap: '1.5rem',
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: true,
  }).mount();
});
</script>

<style scoped>
/* Adding hover effects and styling to the testimonial slides */
.splide__slide {
  transition: transform 0.3s ease-in-out;
}

.splide__slide:hover {
  transform: scale(1.05);
}

.splide__slide p {
  font-size: 1.1rem;
}
</style>
