<template>

    <section id="contact-section" class="text-gray-700 body-font relative bg-gradient-to-r from-blue-100 to-teal-100">
      <div class="container px-6 py-12 mx-auto flex flex-wrap md:flex-nowrap">

        <!-- Map Section -->
        <div class="lg:w-2/3 md:w-1/2 overflow-hidden shadow-lg sm:mr-10 p-6 flex rounded-3xl items-end justify-start relative bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24681.2575744279!2d120.98698490152704!3d14.388682621475626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1729077156466!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style="border:0; filter: grayscale(50%);"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0"
          ></iframe>
          <div class="bg-white relative flex flex-wrap p-6 rounded-3xl shadow-md z-10">
            <div class="lg:w-1/2 px-4">
              <h2 class="text-indigo-600 font-semibold text-xs mb-1">ADDRESS</h2>
              <p class="text-sm">Agoho St. Ph2 Central, Camella Springville, Molino 3, Bacoor, Cavite.</p>
            </div>
            <div class="lg:w-1/2 px-4 mt-4 lg:mt-0">
              <h2 class="text-indigo-600 font-semibold text-xs mb-1">CONTACT INFO</h2>
              <p class="text-sm">partnerships@helmetprosolutions.com</p>
              <p class="text-sm mt-2">+639627533915</p>
            </div>
          </div>
        </div>

        <!-- Feedback Form Section -->
        <div class="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full mt-8 md:mt-0 rounded-3xl shadow-lg p-6 bg-white">
          <h1 id="product2" class="text-5xl font-bold mb-4 text-center text-indigo-600">Partner with Us</h1>
          <h5 class="text-gray-900 font-semibold mb-4">Interested in learning more or need a quotation for our Business Partner Package?</h5>
          <p class="text-gray-600 mb-6">Fill out the form below, and let's start growing your business with HelmetPro.</p>
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

// EmailJS configuration
const SERVICE_ID = 'service_rlub4bt';
const TEMPLATE_ID = 'template_lsp03vi';
const USER_ID = 'IH6ELxmbp_OqIIHco'; 

const sendEmail = () => {
  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    .then(() => {
      alert('Your feedback has been sent successfully!');
      // Clear the form fields after sending
      formData.value.name = '';
      formData.value.email = '';
      formData.value.message = '';
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('There was an error sending your feedback: ' + JSON.stringify(error));
    });
};
</script>

<style scoped>
/* Custom styles for improved visuals */
.bg-white {
  background-color: #ffffff;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.text-indigo-600 {
  color: #5a67d8;
}

.hover\:bg-indigo-700:hover {
  background-color: #4c51bf;
}
</style>
