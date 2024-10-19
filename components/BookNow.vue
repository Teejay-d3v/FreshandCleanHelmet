<template>
  <div>
    <section
      id="product1-section"
      class="bg-gradient-to-r from-blue-300 to-teal-100 text-white  shadow-lg rounded-md relative"
    >
      <div
        class="mx-auto flex justify-center items-center"
        style="background-image: url('/images/partnership3.jpg'); background-size: cover; background-position: center;"
      >
        <!-- Color overlay -->
        <div class="absolute inset-0 bg-black opacity-70 rounded-md"></div>

        <div class="lg:w-4/5 w-full flex flex-wrap rounded-lg shadow-lg overflow-hidden relative z-10">
          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-16 flex flex-col lg:mt-20">
            <h2 class="text-sm title-font text-white tracking-widest mb-2">This is your chance to secure your spot</h2>
            <h2 class="text-4xl font-extrabold mb-4 text-blue-700">Ready to Book?</h2>
            <p class="text-lg text-white mx-auto font-semibold mb-6 py-2">
              Ready to secure your spot? <span class="font-bold text-indigo-700">Book an Appointment</span> by clicking the button below and filling out our form!
            </p>
            <div>
              <a
                href="https://forms.gle/your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              >
                Book Now
              </a>
            </div>
          </div>

          <!-- Main Slider Section -->
          <div class="lg:w-[800px] w-full flex flex-col items-center shadow-md justify-center p-8">
            <div class="w-full rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <img
                src="/images/machine10.png"
                alt="Helmet Clean and Fresh Machine"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Additional styles to enhance the design */
section {
  border-radius: 12px;
}
</style>
