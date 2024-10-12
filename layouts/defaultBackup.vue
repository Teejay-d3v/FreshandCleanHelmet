<template>
  <div class="bg-color=[#f5f5f5]">
    <header class="bg-gray-800 text-white">
      <section class="relative w-full h-screen overflow-hidden custom-bg-video">
        <!-- Video Background -->
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop playsinline>
          <source src="/static/videos/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <!-- Overlay content on top of the video -->
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left text-white p-10">
          <!-- Header with Shadow and Background -->
          <div class="bg-black bg-opacity-20 rounded-lg p-6 mb-4 shadow-lg max-w-lg">
            <h1 class="text-6xl font-bold mb-4 opacity-90 text-teal-400 drop-shadow-lg z-20">
              Helmet Clean and Fresh
            </h1>
            <p class="text-lg z-20">
              Welcome to <strong>Helmet Clean and Fresh</strong>, the revolutionary solution for maintaining your helmet’s hygiene and freshness. Our <strong>Automatic Intelligent Helmet Cleaning Machine</strong> is designed specifically for dry cleaning, disinfection, and deodorization of helmets.
              <br />
              Say goodbye to unpleasant odors, dirt, and germs! With our state-of-the-art vending machine, you can enjoy the convenience of an effortless cleaning experience at your fingertips. The advanced technology ensures that every helmet is thoroughly cleaned and sanitized in just minutes, providing a safe and fresh environment for every ride.
            </p>
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
            <button class="custom-button text-white bg-indigo-500 py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300">
              Order Now
            </button>
          </div>
        </nav>
      </section>
    </header>
    <div>
      <slot />
    </div>

  </div>
</template>

<style scoped>
/* Scoped styling for router-link active class */

</style>
