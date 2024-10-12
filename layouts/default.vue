<template>
  <div>
    <section class="relative w-full h-screen overflow-hidden custom-bg-video">
      <!-- Video Background -->


        <!-- Overlay content on top of the video -->
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left text-white p-10">
          <!-- Header with Shadow and Background -->
          <div class="bg-black bg-opacity-20 rounded-lg p-6 mb-4 shadow-lg max-w-lg">
            <h1 class="text-6xl font-bold mb-4 opacity-90 text-teal-400 drop-shadow-lg z-20">
              Helmet Clean and Fresh
            </h1>
            <p class="text-lg z-20">
              Welcome to <strong>Helmet Clean and Fresh</strong>, your ultimate solution for helmet hygiene. Our <strong>Automatic Intelligent Helmet Cleaning Machine</strong> offers quick dry cleaning, disinfection, and deodorization. Say goodbye to odors and germs—enjoy effortless cleaning at your fingertips, ensuring every helmet is sanitized in minutes for a fresh ride!
            </p>


            <div class="flex justify-center mt-10">
              <button class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold shadow-lg focus:outline-none">
                Order Now
              </button>
            </div>
          </div>
        </div>


      <!-- Navigation Bar -->
      <nav class="fixed top-0 left-0 w-full z-30 bg-teal-500 bg-opacity-40 shadow-lg">
        <div class="container mx-auto px-10 flex justify-between items-center h-[109px]">
          <!-- Brand/Logo -->
          <NuxtLink to="/" class="text-2xl font-bold text-black">
            Logo
          </NuxtLink>

          <!-- Button -->
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
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <!-- Logo or Brand Name -->
      <div class="mb-4 md:mb-0">
        <NuxtLink to="/" class="text-2xl font-bold text-teal-400">
          <img src="/public/images/logo1.png" alt="Logo" class="h-32" />
        </NuxtLink>
      </div>

      <!-- Navigation Links -->
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <li>
          <NuxtLink to="/about" class="hover:text-teal-400 transition duration-200">
            About Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services" class="hover:text-teal-400 transition duration-200">
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-teal-400 transition duration-200">
            Contact
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq" class="hover:text-teal-400 transition duration-200">
            FAQ
          </NuxtLink>
        </li>
      </ul>

      <!-- Social Media Links -->
      <div class="mt-4 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 mx-2">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 mx-2">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 mx-2">
          Instagram
        </a>
      </div>
    </div>

    <!-- Bottom Text -->
    <div class="text-center mt-4">
      <p class="text-sm">
        &copy; {{ new Date().getFullYear() }} Helmet Clean and Fresh. All rights reserved.
      </p>
    </div>
  </footer>

  </div>
</template>

<style scoped>
/* Scoped styling for router-link active class */
.footer-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0b2b5a 146.14%
    ),
    url('/public/images/factoryShots.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
}
</style>
