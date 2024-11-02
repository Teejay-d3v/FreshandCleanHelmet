<template>
  <div>
    <!-- <Chatbot />  -->
    <!-- Banner Section -->
    <section class="relative w-full bg-indigo-50 text-white md:h-screen overflow-hidden">
      <div class="custom-bg-image">
        <!-- Gradient Overlay for better text contrast -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

        <div class="container relative z-10 px-5 py-24 mx-auto flex flex-col items-center justify-center text-center">
          <nuxt-img
            class="w-1/2 lg:w-1/4 mb-8 object-cover rounded-3xl shadow-lg"
            alt="hero"
            src="/images/logo3.png"
            loading="lazy"
          />
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
            Discover the Future of Helmet Cleaning
          </h1>
          <p class="lg:w-2/3 mx-auto mb-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed drop-shadow-md">
            Helmet Pro provides a revolutionary vending machine experience for helmet cleaning, combining advanced technology with convenience for every rider.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
          >
            Learn More
          </a>
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
            <nuxt-img src="/images/logo2.png" alt="Logo" class="h-12 md:h-16" loading="lazy"/>
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
              to="/computation"
              class="text-white hover:text-gray-200 transition duration-300"
              >Computation</NuxtLink
            >
            <NuxtLink
              to="/faqs"
              class="text-white hover:text-gray-200 transition duration-300"
              >FAQ's</NuxtLink
            >
            <NuxtLink
              to="/contactus"
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
    to="/computation"
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
    to="/contactus"
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
      <nuxt-img src="/images/logo2.png" alt="Logo" class="h-[120px] mr-4" loading="lazy"/>

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
        <NuxtLink to="/partnership">Services</NuxtLink>
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
            <a href="https://www.facebook.com/helmetprosolutions" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-500">facebook</a>
        </li>
        <li><i class="fab fa-instagram-square text-3xl text-pink-500 mr-2"></i>
          <a href="https://www.instagram.com/helmetpro_vendo/" target="_blank" rel="noopener noreferrer" class="hover:text-pink-600">instagram</a>
        </li>
        <li>
          <i class="fab fa-facebook-messenger text-lg"><span class="text-lg m-2"></span></i>
          <a href="https://m.me/helmetprosolutions" target="_blank" class="text-blue-500 hover:text-blue-700">messenger </a>
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
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAnimations } from '@/composables/useAnimations';
// import Chatbot from '@/components/Chatbot.vue';

const { setupAnimations } = useAnimations();
const title = ref(null);
const paragraph = ref(null);
const image = ref(null);
const isChatbotVisible = ref(false);
const isMenuOpen = ref(false); // New state for mobile menu

const router = useRouter();

const toggleChatbot = () => {
  isChatbotVisible.value = !isChatbotVisible.value;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const refreshChatbot = () => {
  isChatbotVisible.value = false; // Hide the chatbot
  setTimeout(() => {
    isChatbotVisible.value = true; // Refresh after a short delay
  }, 0); // Instant refresh
};

watch(router.currentRoute, () => {
  refreshChatbot();
});

onMounted(() => {
  isChatbotVisible.value = true; // Show the chatbot on initial load
});

// Setup animation for each image
setupAnimations([
  {
    element: image,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.5, easing: 'ease-out' },
  },
  {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
]);

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
  height: 100%;
  width: 100%;
  background: linear-gradient(
    89.65deg,
    rgba(120, 175, 253, 0.1) 11.52%,
    #0B2B5A 146.14%
  ),
  url('/images/image1.png');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem; /* Add padding for spacing on smaller screens */
}

.centered-image {
  max-width: 90%; /* Ensure the image is responsive */
  height: auto;
}

@media (max-width: 1024px) {
  .custom-bg-image {
    height: 80vh; /* Adjust background height for tablets */
  }
}

@media (max-width: 768px) {
  .custom-bg-image {
    height: 90vh; /* Adjust background height for smaller screens */
  }

  .centered-image {
    width: 70vw; /* Resize image for smaller screens */
  }
}

@media (max-width: 480px) {
  .centered-image {
    width: 80vw; /* Resize image even further for mobile devices */
  }
}
nav {
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

button {
transition: background-color 0.3s, transform 0.2s;
}

button:hover {
transform: translateY(-2px);
}


</style>
