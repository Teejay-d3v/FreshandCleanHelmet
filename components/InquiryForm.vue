<template>
  <section class="bg-gray-50 py-10 px-5 sm:px-10 lg:px-20 rounded-lg shadow-lg">
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      <!-- Image Section -->
      <div class="flex justify-center lg:justify-start">
        <img
          src="/images/machine8.png"
          alt="Inquiry"
          class="rounded-lg shadow-md"
        />
      </div>
      <!-- Text and Button Section -->
      <div class="text-center lg:text-left">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Got Questions?</h2>
        <p class="text-gray-600 mb-6 text-lg">
          We're here to help! Click the button below to send us your inquiries via our Google Form.
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
        >
          Inquire Now
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript needed for this component as it is a simple redirection to a Google Form
</script>

<style scoped>
/* Add additional custom styles if needed */
</style>
