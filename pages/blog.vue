<template>
  <div class="bg-gradient-to-r from-blue-200 to-teal-100 pb-20">
    <article class="lg:px-4 py-4 lg:py-8 max-w-[1500px] mx-auto">
      <header class="mb-6">
        <div class="relative z-10 text-center bg-white ;g:p-4 shadow-lg rounded-lg">
          <h1 class="text-3xl lg:text-5xl font-extrabold text-indigo-600 lg:p-5 px-2 lg:mx-52">{{ blogContent.title }}</h1>
        </div>
        <!-- <p class="text-gray-500 mt-2">{{ blogContent.date }}</p> -->
      </header>
      
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <!-- Image Section -->
        <figure class="md:col-span-3 shadow-2xl">
          <nuxt-img
            :src="blogContent.image"
            :alt="blogContent.title + ' - Helmet Cleaning Vending Machine by Helmet Pro Solutions'"
            class="w-full h-full object-cover rounded-lg shadow-xl border-4 border-blue-200"
          />
          <figcaption class="text-xs md:text-sm text-gray-500 mt-2">Helmet Pro Solutions' Helmet Cleaning Vending Machine - advanced, eco-friendly, and user-friendly solution for helmet hygiene.</figcaption>
        </figure>

        <!-- Text Section -->
        <section class="md:col-span-2 bg-white p-6 rounded-lg shadow-2xl">
          <div v-html="blogContent.content" class="prose max-w-none text-gray-700"></div>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout',
  name: 'BLOG',
});
const blogContent = {
  title: 'Revolutionizing Helmet Hygiene with the Helmet Cleaning Vending Machine',
  date: '2024-11-02',
  image: '/images/machine3.png',
  content: ` 
    <p>Helmet Pro Solutions introduces a revolutionary <strong>Helmet Cleaning Vending Machine</strong>, offering a game-changing approach to <strong>helmet hygiene</strong> and <strong>sanitation</strong>. This <strong>automated helmet cleaning solution</strong> is designed to make <strong>helmet care</strong> accessible, efficient, and <strong>eco-friendly</strong> for motorcyclists. Utilizing <strong>advanced helmet cleaning technology</strong>, our machine ensures <strong>helmet disinfection</strong> by effectively removing bacteria, sweat, and odors. Perfect for high-traffic areas, this <strong>self-service helmet cleaner</strong> provides convenient and reliable <strong>helmet sanitization</strong> that supports a cleaner, healthier riding experience.</p><br><br>

    <h2>Advanced Helmet Cleaning Technology</h2>
    <p>Our vending machine uses innovative cleaning technology that thoroughly <strong>sanitizes helmets</strong>, removing bacteria, sweat, and odors. The process is quick and effective, making it ideal for <strong>high-traffic areas</strong> like <strong>motorcycle parking spots</strong>, and helmet rental stations.</p><br>

    <h2>Eco-Friendly Cleaning Solutions</h2>
    <p>We prioritize <strong>eco-friendly helmet cleaning</strong> agents that are safe for both users and the environment. This approach helps us maintain high standards in helmet hygiene without compromising sustainability. Our products are carefully chosen to ensure <strong>helmet disinfection</strong> that is gentle on materials yet powerful against bacteria.</p><br>

    <h2>Effortless User Experience</h2>
    <p>Our <strong>Helmet Cleaning Vending Machine</strong> is incredibly <strong>user-friendly</strong>, allowing anyone to clean their helmet in minutes. This standalone solution is perfect for riders who value cleanliness and convenience, making <strong>helmet hygiene</strong> as easy as inserting a coin or card.</p>
  `,
};
</script>

<style scoped>
.prose h2 {
  font-size: 1.5rem;
  margin-top: 1.25rem;
  color: #1a202c;
}
.prose p {
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #4a5568;
}
</style>
