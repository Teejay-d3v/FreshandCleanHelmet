<template>
  <section ref="sectionRef" class="bg-gradient-to-r from-blue-300 to-teal-100 py-16">
    <div class="container mx-auto flex flex-col items-center text-center">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-6">Motorcycle Usage in the Philippines</h1>
      <p class="text-lg lg:text-xl text-gray-700 mb-8 px-4">
        As of 2024, there are approximately 
        <span ref="motorcycleCount1" class="font-bold text-indigo-600 text-5xl">0</span> 
        registered motorcycles in the Philippines.
      </p>
      <p class="text-md lg:text-lg mb-4 px-4">
        Most of these riders are committed to safety, proudly donning helmets on every journey. Yet, many face the challenge of odor and hygiene.
        Our Vending Fresh and Clean Helmet service is not just a solution—it’s a revolution!
      </p>
      <div class="relative w-full mb-8">
        <img src="/images/motorcycle.jpg" alt="Motorcycles in the Philippines" class="w-full h-auto rounded-2xl shadow-lg" />
        <div class="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <p class="text-md lg:text-lg text-center mb-6 px-60">
            <span class="text-3xl lg:text-4xl font-bold">Imagine the impact on your business by offering riders a safe and convenient way to clean their helmets!</span> 
           <br> Our innovative vending machines cater to a growing demand, ensuring that every helmet is sanitized, fresh, and ready for the next ride.
          </p>
          <p class="text-md lg:text-lg text-center mb-6  px-60">
            <span>Join the movement toward safer, cleaner riding experiences.</span> With our Helmet Cleaning Vending Machines, you are not only providing a valuable service but also positioning your business at the forefront of a safety revolution.
          </p>
          <button @click="openModal" class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Learn More About This Opportunity
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAnimations } from '@/composables/useAnimations';

const motorcycleCount1 = ref(null);
const motorcycleCount = ref(8470000);
const sectionRef = ref(null);
const { setupAnimations } = useAnimations();

// Function to animate number
const animateNumber = (element, end, duration = 1000) => {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const easedProgress = progress * progress * (3 - 2 * progress); 
    element.textContent = Math.floor(easedProgress * end).toLocaleString(); 
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

// Trigger animation on component mount
onMounted(() => {
  animateNumber(motorcycleCount1.value, motorcycleCount.value, 2000);
});

setupAnimations([{
  element: sectionRef,
  customFn: () => {
    // Call the animateNumber function here if you want it triggered by scrolling
    // animateNumber(motorcycleCount1.value, motorcycleCount.value, 2000);
  }
}]);
</script>

<style scoped>
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

button {
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}

strong {
  color: #ffffff;
}
</style>
