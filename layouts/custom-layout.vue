<template>
  <div>
<section class="relative w-full bg-indigo-50 text-white overflow-hidden">
  <div class="custom-bg-image">
    <!-- Gradient Overlay for better text contrast -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

    <div class=" relative z-10 mx-auto flex flex-col items-center justify-center text-center">
      <!-- Display the page name here, above the image -->
      
      
      <img
        class="w-1/2 lg:w-1/4 mb-8 object-cover rounded-3xl shadow-lg"
        alt="hero"
        src="/images/logo3.png"
      />
      <h1 class="text-center text-2xl font-bold mb-4">{{ pageName }}</h1>
    </div>
  </div>
</section>
      <!-- Navigation Bar -->
      <section>
    <nav :class="['fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-300 to-teal-300 shadow-lg transition-transform duration-300', { '-translate-y-full': isHidden }]">
      <div class="container mx-auto flex justify-between items-center h-[70px] px-4 md:px-10">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo2.png" alt="Logo" class="h-12 md:h-16" />

        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">

        </div>

        <!-- Button Group for Actions -->
        <div class="flex space-x-4">
          <NuxtLink to="/" class="flex items-center">
          Home

        </NuxtLink>
        <NuxtLink to="/about" class="flex items-center">
          About
        </NuxtLink>

        <NuxtLink to="/Computation" class="flex items-center">
          Computation
        </NuxtLink>
        <NuxtLink to="/faqs" class="flex items-center">
          FAQ's
        </NuxtLink>
        <NuxtLink to="/contactUs" class="flex items-center">
          Contact Us
        </NuxtLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScPH78it2IObDmevPColeGFe16743x8IzgvmQNGKGxYfX2wDQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
          >
          Book Now
          </a>
          </div>
        </div>
      </nav>
    </section>    
    <div>
    <slot />
  </div>
    

  <footer class="bg-gradient-to-r from-blue-200 to-teal-100 p-6 text-white">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center mb-4 md:mb-0">
          <img src="/images/logo2.png" alt="Logo" class="h-[120px] mr-3" />
        </div>
        <div class="text-center text-md font-bold text-indigo-700">
          <p class="mb-2 text-indigo-600">Email: <a href="mailto:example@example.com" class="underline">example@example.com</a></p>
          <p>Contact: <span class=" text-indigo-600 ">+1 (234) 567-8901</span></p>
        </div>
      </div>
      <div class="text-center font-bold mt-4 text-indigo-600 ">
        <p>&copy; {{ new Date().getFullYear() }} Your Company Name. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
// Import components if needed
import Chatbot from '@/components/Chatbot.vue';
const route = useRoute();
const pageName = ref(route.meta.name || '');

// Watch for changes in the route and update the page name
watch(
  () => route.meta.name,
  (newName) => {
    pageName.value = newName || 'Default Page';
  }
);
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
      height: 60vh; /* Adjust background height for smaller screens */
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

.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000; /* Ensure it stays on top of other elements */
}
</style>
