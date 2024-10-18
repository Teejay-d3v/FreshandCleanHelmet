  <template>
    <div>
      <!-- Banner Section -->
      <section class="relative w-full bg-indigo-50 text-white md:h-screen overflow-hidden">
      <div class="custom-bg-image">
        <!-- Gradient Overlay for better text contrast -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        
        <div class="container relative z-10 px-5 py-24 mx-auto flex flex-col items-center justify-center text-center">
          <img
            class="w-1/2 lg:w-1/4 mb-8 object-cover rounded-3xl shadow-lg"
            alt="hero"
            src="/images/logo3.png"
          />
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
            Discover the Future of Helmet Cleaning
          </h1>
          <p class="lg:w-2/3 mx-auto mb-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed drop-shadow-md">
            Helmet Pro provides a revolutionary vending machine experience for helmet cleaning, combining advanced technology with convenience for every rider.
          </p>
          <button
            @click="scrollToSection('product2')"
            class="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold focus:outline-none"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

      <!-- Navigation Bar -->
      <section>
    <nav :class="['fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-300 to-teal-300 shadow-lg transition-transform duration-300', { '-translate-y-full': isHidden }]">
      <div class="container mx-auto flex justify-between items-center h-[70px] px-4 md:px-10">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo2.png" alt="Logo" class="h-12 md:h-16" />

        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
         
        </div>

        <!-- Button Group for Actions -->
        <div class="flex space-x-4">
          <button @click="openModal" class="text-white bg-indigo-600 border-0 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-sm md:text-lg font-semibold shadow-lg focus:outline-none">
            Book Now
          </button>

        </div>
      </div>
    </nav>
    <ModalComponent :isVisible="isModalOpen" @close="closeModal" />
  </section>
      
      <div>
        <slot />
      </div>

      <footer class="bg-gradient-to-r from-blue-200 to-teal-100 p-6 text-white">
          <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center mb-4 md:mb-0">
              <img src="/images/logo2.png" alt="Logo" class="h-[120px] mr-3" />
            </div>
            <div class="text-center text-md font-bold text-indigo-700">
              <p class="mb-2 text-indigo-600">Email: <a href="mailto:example@example.com" class="underline">example@example.com</a></p>
              <p>Contact: <span class=" text-indigo-600 ">+1 (234) 567-8901</span></p>
            </div>
          </div>
          <div class="text-center font-bold mt-4 text-indigo-600 ">
            <p>&copy; {{ new Date().getFullYear() }} Your Company Name. All rights reserved.</p>
          </div>
        </footer>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ModalComponent from '../components/payments.vue';
import { useAnimations } from '@/composables/useAnimations';

const { setupAnimations } = useAnimations();
const title = ref(null);
const paragraph = ref(null);
const image = ref(null);


// Setup animation for each image
setupAnimations([
  {
    element: image,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.5, easing: 'ease-out' }
  },
  {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
]);

  // Define reactive state for modal visibility
  const isModalOpen = ref(false);

  const openModal = () => {
    isModalOpen.value = true; // Set modal visibility to true
  };

  const closeModal = () => {
    isModalOpen.value = false; // Set modal visibility to false
  };

  const isHidden = ref(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      isHidden.value = true; // Scrolling down, hide the navbar
    } else {
      isHidden.value = false; // Scrolling up, show the navbar
    }
    lastScrollY = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};
  </script>

  <style scoped>
  .custom-bg-image {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('/images/image1.png');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem; /* Add padding for spacing on smaller screens */
  }

  .centered-image {
    max-width: 90%; /* Ensure the image is responsive */
    height: auto;
  }

  @media (max-width: 1024px) {
    .custom-bg-image {
      height: 80vh; /* Adjust background height for tablets */
    }
  }

  @media (max-width: 768px) {
    .custom-bg-image {
      height: 60vh; /* Adjust background height for smaller screens */
    }

    .centered-image {
      width: 70vw; /* Resize image for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .centered-image {
      width: 80vw; /* Resize image even further for mobile devices */
    }
  }
  nav {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

button {
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}
  </style>
