<template>
  <section class="bg-gradient-to-r from-blue-100 to-teal-100">
    <div class="custom-bg-image min-h-screen flex flex-col items-center justify-center p-6">
      <div ref="title" class="pt-5 px-10 text-center justify-center rounded-3xl">
        <h1 id="product2" class="text-4xl font-bold mb-4 text-indigo-600">
          More Than Just Vending Machines — We’re Your Partner in Business Growth
        </h1>
        <p ref="paragraph" class="text-2xl px-32 text-black mb-8 leading-relaxed">
          Our commitment goes beyond supplying state-of-the-art helmet cleaning vending machines. We’re here to support your business every step of the way, helping you maximize your machine's potential and ensuring long-term success.
        </p>
      </div>
      <!-- Desktop view -->
      <div class="relative w-full">
        <img src="/images/partnership.jpg" alt="Partnership" class="h-[650px] w-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <button class="bg-blue-600 text-white px-10 py-3 rounded-lg mt-96 hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
