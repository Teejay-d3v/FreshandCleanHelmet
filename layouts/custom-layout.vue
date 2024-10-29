<template>
  <div>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    </head>
    <Chatbot />

    <!-- Hero Section -->
    <section class="relative w-full bg-indigo-50 text-white overflow-hidden">
      <div class="custom-bg-image">
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div class="relative z-10 mx-auto flex flex-col items-center justify-center text-center p-6">
          <img class="w-1/2 lg:w-1/4 mb-8 object-cover rounded-3xl shadow-lg" alt="hero" src="/images/logo3.png" />
          <h1 class="text-center text-3xl font-extrabold mb-4 text-white">{{ pageName }}</h1>
        </div>
      </div>
    </section>

    <!-- Navigation Bar -->
    <section>
      <nav
        :class="['absolute top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-400 to-teal-400 shadow-lg transition-transform duration-300', { '-translate-y-full': isHidden }]"
      >
        <div class="container mx-auto flex justify-between items-center h-[70px] px-4 md:px-10">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img src="/images/logo2.png" alt="Logo" class="h-12 md:h-16" />
          </NuxtLink>

          <!-- Burger Menu for Mobile -->
          <div class="flex md:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Navigation Links for Desktop -->
          <div class="hidden md:flex space-x-8">
            <NuxtLink
              to="/"
              class="text-white hover:text-gray-200 transition duration-300"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="text-white hover:text-gray-200 transition duration-300"
              >About</NuxtLink
            >
            <NuxtLink
              to="/Computation"
              class="text-white hover:text-gray-200 transition duration-300"
              >Computation</NuxtLink
            >
            <NuxtLink
              to="/faqs"
              class="text-white hover:text-gray-200 transition duration-300"
              >FAQ's</NuxtLink
            >
            <NuxtLink
              to="/contactUs"
              class="text-white hover:text-gray-200 transition duration-300"
              >Contact Us</NuxtLink
            >
            <NuxtLink
              to="/partnership"
              class="text-white hover:text-gray-200 transition duration-300"
              >Join Us</NuxtLink
            >
          </div>
        </div>

        <!-- Mobile Menu -->
<!-- Mobile Menu -->
<div
  v-show="isMenuOpen"
  class="md:hidden bg-blue-500 text-white space-y-2 px-4 py-2 shadow-lg transition-all duration-300"
>
  <NuxtLink
    to="/"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >Home</NuxtLink
  >
  <NuxtLink
    to="/about"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >About</NuxtLink
  >
  <NuxtLink
    to="/Computation"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >Computation</NuxtLink
  >
  <NuxtLink
    to="/faqs"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >FAQ's</NuxtLink
  >
  <NuxtLink
    to="/contactUs"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >Contact Us</NuxtLink
  >
  <NuxtLink
    to="/partnership"
    @click="toggleMenu"
    class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
    >Join Us</NuxtLink
  >
</div>
      </nav>
    </section>

    <div>
      <slot />
    </div>

    <!-- Footer Section -->
    <footer class="bg-gradient-to-r from-blue-300 to-teal-200 p-8 text-gray-800">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-start">
    <div class="flex items-center mb-6 md:mb-0">
      <img src="/images/logo2.png" alt="Logo" class="h-[120px] mr-4" />

    </div>

    <div class="flex flex-col mb-6 md:mb-0">
      <h2 class="text-lg font-bold text-indigo-700 mb-2">Contact Us</h2>
      <p class="mb-1">
        <i class="fas fa-envelope text-indigo-600 text-2xl mb-2 mr-4"></i>
        <a href="mailto:partnerships@helmetprosolutions.com"  class="underline text-indigo-600 hover:text-indigo-500">partnerships@helmetprosolutions.com</a>
      </p>
      <p><i class="fas fa-phone text-indigo-600 text-2xl mb-2 mr-4"></i><span class="font-medium text-indigo-600">+63-962-753-3915</span></p>
    </div>

    <div class="flex flex-col mb-6 md:mb-0">
      <h2 class="text-lg font-bold text-indigo-700 mb-2">Quick Links</h2>
      <ul class="space-y-1">
        <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/parnership">Services</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contactUs">Contact</NuxtLink>
      </li>
      </ul>
    </div>

    <div class="flex flex-col">
      <h2 class="text-lg font-bold text-indigo-700 mb-2">Follow Us</h2>
      <div class="flex space-x-4">
      

       
       <ul class="space-y-1">
          <li><i class="fab fa-facebook-square text-3xl text-indigo-500 mr-2"></i>
            <a href="https://www.facebook.com/helmetprosolutions" target="_blank" rel="noopener noreferrer" class=" hover:text-indigo-500">facebook</a>
        </li>
        <li><i class="fab fa-instagram-square text-3xl text-pink-500 mr-2"></i>
          <a href="https://www.instagram.com/helmetpro_vendo/" target="_blank" rel="noopener noreferrer" class="  hover:text-pink-600">instagram</a>
        </li>
      </ul>
      </div>
    </div>
  </div>

  <div class="text-center font-medium mt-6 text-indigo-600">
    <p>&copy; {{ new Date().getFullYear() }} HELMETPRO. All rights reserved.</p>
  </div>
</footer>

  </div>
</template>

<script setup>
import Chatbot from '@/components/Chatbot.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageName = ref(route.meta.name || '');
const isMenuOpen = ref(false);
const isHidden = ref(false);

watch(
  () => route.meta.name,
  (newName) => {
    pageName.value = newName || 'Default Page';
  }
);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};


const selectMenuItem = () => {
  // Do nothing here to keep the menu open
  // You can also add additional logic if needed, like logging or tracking selections.
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  isHidden.value = scrollY > 100 && scrollY < window.prevScrollY;
  window.prevScrollY = scrollY;
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
  height: 500px;
  width: 100%;
  background: linear-gradient(
    89.65deg,
    rgba(120, 175, 253, 0.1) 11.52%,
    #0B2B5A 146.14%
  ),
  url('/images/image2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
}

@media (max-width: 1024px) {
  .custom-bg-image {
    height: 80vh;
  }
}

@media (max-width: 768px) {
  .custom-bg-image {
    height: 60vh;
  }
}

@media (max-width: 480px) {
  .centered-image {
    width: 80vw;
  }
}
</style>
