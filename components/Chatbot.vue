<template>
  <section class="h-[100px] flex items-center fixed bottom-6 right-6 justify-center z-50">
    <div class="relative flex flex-col items-center">
      <button
        @click="toggleButtons"
        class=" z-10"
      >
        <img src="/public/images/chatlogo.png" class="h-[130px] chat-logo" :class="{ 'rotate': isRotating }">
      </button>

      <div v-if="showButtons" class="absolute flex flex-col items-center">
        <button
          ref="button1"
          class="circle-button bg-blue-500 text-white animate-show"
          style="top: 0; left: 0;" 
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScPH78it2IObDmevPColeGFe16743x8IzgvmQNGKGxYfX2wDQ/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
          >
           Book Now
          </a>
        </button>
        <button
          ref="button2"
          class="circle-button bg-blue-500 text-white animate-show"
          style="top: 0; left: 0;" 
        >
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
           Inquire Now
          </a>
        </button>
        <button
          ref="button3"
          class="circle-button bg-blue-500 text-white animate-show z-10"
          style="top: 0; left: 0;"  
        >
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdagJhiw1LHysZAHzuqV16C6vQPvLy9dHs0o3bUxza1HqvV_Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
           Help Support
          </a>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const showButtons = ref(false);
const isRotating = ref(false);

const toggleButtons = () => {
  showButtons.value = !showButtons.value;
  isRotating.value = !isRotating.value; // Toggle the rotation

  nextTick(() => {
    document.querySelectorAll('.animate-show').forEach((button, index) => {
      button.style.animationDelay = `${index * 100}ms`; // Stagger the animation
      button.classList.toggle('animate-in', showButtons.value);
      button.classList.toggle('animate-out', !showButtons.value);
    });
  });
};
</script>

<style scoped>
.chat-logo {
  transition: transform 0.6s ease; /* Smooth transition for the rotation */
}

.rotate {
  transform: rotate(360deg); /* Rotate the image 360 degrees */
}

.circle-button {
  width: 70px; 
  height: 70px; 
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  opacity: 0; 
  animation-duration: 0.6s; 
  animation-fill-mode: forwards; 
  transform-origin: center center;
}

/* Keyframes for move and circular animation around the button to the left */
@keyframes animateIn1 {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5); /* Start from the parent button */
  }
  100% {
    opacity: 1;
    transform: translate(-150px, 20px) scale(1); /* Move left */
  }
}

@keyframes animateIn2 {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-110px, -60px) scale(1); /* Move diagonally up-left */
  }
}

@keyframes animateIn3 {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-30px, -100px) scale(1); /* Move straight up */
  }
}

@keyframes animateOut {
  0% {
    opacity: 1;
    transform: translate(var(--translateX), var(--translateY)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5); /* Return to the original position */
  }
}

.animate-in:nth-child(1) {
  animation-name: animateIn1;
}

.animate-in:nth-child(2) {
  animation-name: animateIn2;
}

.animate-in:nth-child(3) {
  animation-name: animateIn3;
}

.animate-out {
  animation-name: animateOut; 
}

.animate-out:nth-child(1) {
  --translateX: -100px;
  --translateY: 0px;
}

.animate-out:nth-child(2) {
  --translateX: -80px;
  --translateY: -80px;
}

.animate-out:nth-child(3) {
  --translateX: 0px;
  --translateY: -100px;
}
</style>
