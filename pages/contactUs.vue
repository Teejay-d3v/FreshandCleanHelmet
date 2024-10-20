<template>
  <div class="py-20  bg-gradient-to-r from-blue-300 to-teal-100">
    <section class="text-gray-600 body-font">
      <div class="container px-5  mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-6">Contact Us / Visit Us</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We’re here to help! Reach out via email, phone, or visit our office at Molino 3, Bacoor. We look forward to connecting with you!</p>
        </div>
      </div>
    </section>
    <section >
      <div class="contact-us-container">
        <div class="contact-info mb-6 ">
          <h3 class="text-xl font-semibold mb-2">Contact Information</h3>
          <p><strong>Email:</strong> <a href="mailto:example@example.com" class="text-blue-600">example@example.com</a></p>
          <p><strong>Contact Number:</strong> <span class="text-blue-600">+1 (234) 567-8901</span></p>
        </div>
        <h3 class="text-xl font-semibold mb-2">Location</h3>
        <div class="map-container mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12865.080123659327!2d120.949117!3d14.446871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9931daff42057%3A0xa10da4648c920012!2sMolino%203%2C%20Bacoor%20City%2C%20Cavite%2C%20Philippines!5e0!3m2!1sen!2sus!4v1698063299158!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  </section>
</div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout',
  name: 'Contact Us',
});
</script>

<style scoped>
.contact-us-container {
  max-width: 70%;
  margin: 0 auto;
  padding: 1.5rem;  
  background-color: #f8fafc; /* Light gray background */
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.map-container {
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>
