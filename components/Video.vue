<template>
  <div>
    <section class="bg-gradient-to-r from-blue-100 to-teal-100 py-20">
      <div class="flex flex-col text-center w-full  mx-auto">
          <h1 class="text-3xl font-bold text-indigo-600">Walkthrough</h1>
          <p class="text-black text-center text-5xl">Watch this video to see how it works!</p>
        </div>
      <div class="video-wrapper ">
        <div class="video-container ">
          <video
            src="/video.mp4"
            :controls="controls"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            class="enhanced-video"
          ></video>
        </div>
      </div>
    </section>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props for the video component
defineProps({
  src: {
    type: String,
    required: true,
  },
  controls: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  min-height: 100vh; 
}

.video-container {
  position: relative;
  width: 90%;
  max-width: 1600px;
  border: 8px solid rgba(255, 255, 255, 0.8); 
  border-radius: 15px; 
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); 
  overflow: hidden; 
}

.enhanced-video {
  width: 100%;
  height: auto;
  max-height: 85vh; 
  object-fit: cover;
}
</style>
