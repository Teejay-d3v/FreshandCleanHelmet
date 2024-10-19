  <template>
  <section class="bg-gradient-to-r from-blue-300 to-teal-100">
    <div class="mx-auto flex items-center justify-center ">
      <!-- Desktop view -->
      <div class="h-[300px] relative w-full flex">
        <img src="/images/partnership2.jpg" alt="Partnership" class="w-full h-auto object-cover" />
        
        <!-- Color Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 px-4 ">
          <h1 class="w-1/2 text-5xl mb-4 text-white  rounded-2xl font-extrabold">
            Got Questions?
          </h1>
          <div class="rounded-2xl flex text-center">
            <p class="text-white mb-6 text-lg">
              We're here to help! Click the button below to send us your inquiries via our Google Form.
            </p>
          </div>

          <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Inquire Now
        </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
