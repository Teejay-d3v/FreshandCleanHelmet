<template>
  <div>
    <!-- Video Section -->
    <section class="relative w-full h-screen overflow-hidden custom-bg-video">
      <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop playsinline>
        <source src="/static/videos/product-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="text-center text-white p-10 max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-teal-400">
            Introducing the Helmet Fresh and Clean Vending Machine
          </h1>
          <p class="text-lg mb-6">
            Experience the ultimate in helmet hygiene with our state-of-the-art vending machine. Quick, efficient, and eco-friendly helmet cleaning at your fingertips!
          </p>
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </section>

    <!-- Product Highlights Section -->
    <section class="py-16 bg-gray-400">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 text-teal-400">
          Why Choose the Helmet Fresh and Clean Vending Machine?
        </h2>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2">
            <div class="h-full bg-white p-6 rounded-lg shadow-md">
              <img src="/images/1.png" class="h-40 mb-4 mx-auto" alt="Quick Clean">
              <h3 class="text-xl font-semibold mb-3">Quick and Effective Cleaning</h3>
              <p class="leading-relaxed text-base">
                Get your helmet cleaned, dried, and sanitized in just minutes, all while ensuring zero damage to your gear.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/2">
            <div class="h-full bg-white p-6 rounded-lg shadow-md">
              <img src="/images/5.png" class="h-40 mb-4 mx-auto" alt="Eco-Friendly">
              <h3 class="text-xl font-semibold mb-3">Eco-Friendly Technology</h3>
              <p class="leading-relaxed text-base">
                Our machine uses environmentally friendly solutions, reducing chemical waste and protecting the planet.
              </p>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-8 mt-10">
          <button class="bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-lg shadow-lg text-lg font-semibold">
            Grabs Yours Now        
          </button>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
// No additional scripts required for this page
</script>

<style scoped>
.custom-bg-video {
  background: url('/images/vending-machine-bg.jpg') no-repeat center center / cover;
}
</style>
