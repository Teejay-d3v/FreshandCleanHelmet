<template>
  <div>
    <section
      id="product1-section"
      class="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 py-10 shadow-lg rounded-lg"
    >
      <div class="container mx-auto flex justify-center items-center px-5">
        <div class="lg:w-4/5 w-full flex flex-wrap bg-white rounded-3xl shadow-lg overflow-hidden">
          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-16 flex flex-col lg:mt-20 ">
            <h2 class="text-sm title-font text-gray-400 tracking-widest mb-2">This is your chance to secure your spot</h2>
            <h2 class="text-4xl font-extrabold mb-4 text-blue-700 ">Ready to Book?</h2>
            <p class="text-lg mb-8 leading-relaxed py-2">
              Ready to secure your spot? <span class="font-bold text-indigo-700">Book an Appointment</span> by clicking the button below and filling out our form!
            </p>
            <div class="">
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
          <div class="lg:w-2/4 w-full flex flex-col items-center shadow-md justify-center p-8 bg-gray-50">
            <div class="w-full rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <img
                src="/images/machine10.png"
                alt="Helmet Clean and Fresh Machine"
                class="w-full h-auto object-cover rounded-lg "
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
