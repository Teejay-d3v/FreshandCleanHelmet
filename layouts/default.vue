<template>
  <div>
    <section class="relative w-full bg-indigo-50 h-screen overflow-hidden custom-bg-video">
      <!-- Video Background -->
      <div class="custom-bg-image"></div>
      <!-- <video class="absolute top-0 left-0 w-full h-[90%] object-cover" autoplay muted loop playsinline>
        <source src="/static/videos/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->
    </section>

    <!-- Content -->
    <!-- <section>
      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left text-white p-10">
        <div class="bg-black bg-opacity-20 rounded-lg p-6 mb-4 shadow-lg max-w-lg">
          <div class="flex justify-center my-4">
            <img
              src="/public/images/logo3.png"
              alt="Logo"
              class="transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <div class="flex justify-center mt-10">
            <button class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold shadow-lg focus:outline-none">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Navigation Bar -->
    <section>
      <nav
        :class="['fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-300 to-teal-300 bg-opacity-40 shadow-lg transition-transform duration-300', { '-translate-y-full': isHidden }]"
      >
        <div class="container mx-auto px-10 flex justify-between items-center h-[89px]">
          <NuxtLink to="/" class="text-2xl font-bold text-black">
            <img src="/public/images/logo2.png" alt="Logo" class="h-32" />
          </NuxtLink>
          <button class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold shadow-lg focus:outline-none">
            Order Now
          </button>
        </div>
      </nav>
    </section>

    <div>
      <slot />
    </div>

    <footer class="bg-gradient-to-r from-blue-300 to-teal-300 bg-opacity-90 text-white py-8">
  <!-- Bottom Content -->
  <div class="container mx-auto flex flex-col items-center text-center">
    <NuxtLink to="/" class="flex items-center mb-4">
      <img src="/public/images/logo2.png" alt="Logo" class="h-32 transition-transform duration-300 hover:scale-110" />
    </NuxtLink>
    <p class="text-lg font-semibold mb-2">
      &copy; {{ new Date().getFullYear() }} Helmet Clean and Fresh. All rights reserved.
    </p>
    <div class="flex gap-6 text-sm">
      <NuxtLink to="/privacy" class="hover:text-teal-200 transition duration-200">Privacy Policy</NuxtLink>
      <NuxtLink to="/terms" class="hover:text-teal-200 transition duration-200">Terms of Service</NuxtLink>
      <NuxtLink to="/contact" class="hover:text-teal-200 transition duration-200">Contact Us</NuxtLink>
    </div>
  </div>
</footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    isHidden.value = true; // Scrolling down, hide the navbar
  } else {
    isHidden.value = false; // Scrolling up, show the navbar
  }
  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.custom-bg-image {
  height: 1000px;  
  width: 100%;
  background-image: url('/public/images/set5.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  background-size: cover; /* Adjust size to fit within the container */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: relative;
}
</style>
