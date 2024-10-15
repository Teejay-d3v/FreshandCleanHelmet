<template>
  <div>
    <section class="relative w-full h-screen overflow-hidden custom-bg-video">
      <!-- Video Background -->
      <video class="absolute top-0 left-0 w-full h-[90%] object-cover" autoplay muted loop playsinline>
        <source src="/static/videos/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

    <!-- Content -->
    <section>
      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left text-white p-10">
        <div class="bg-black bg-opacity-20 rounded-lg p-6 mb-4 shadow-lg max-w-lg">
          <div class="flex justify-center my-4">
            <img
              src="/public/images/logo3.png"
              alt="Logo"
              class="transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <p class="text-lg z-20">
            Welcome to <strong>Helmet Clean and Fresh</strong>, your ultimate solution for helmet hygiene. Our
            <strong>Automatic Intelligent Helmet Cleaning Machine</strong> offers quick dry cleaning, disinfection, and deodorization. Say goodbye to odors and germs—enjoy effortless cleaning at your fingertips, ensuring every helmet is sanitized in minutes for a fresh ride!
          </p>
          <div class="flex justify-center mt-10">
            <button class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold shadow-lg focus:outline-none">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>

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

    <footer class="bg-teal-700 bg-opacity-80 text-white py-6">
      <!-- Bottom Text -->
      <div class="flex text-center mt-4 items-center justify-center">
        <NuxtLink to="/" class="text-2xl font-bold text-teal-400">
          <img src="/public/images/logo1.png" alt="Logo" class="h-32" />
        </NuxtLink>
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Helmet Clean and Fresh. All rights reserved.
        </p>
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
/* Scoped styling for the hidden navigation bar */
</style>
