<template>
  <div class="video-wrapper">
    <div class="video-container">
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
  background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
  min-height: 100vh; /* Ensures full height for better presentation */
}

.video-container {
  position: relative;
  width: 90%;
  max-width: 1600px; /* Ensures the video doesn't get too large on ultra-wide screens */
  border: 8px solid rgba(255, 255, 255, 0.8); /* Adds a sleek white border */
  border-radius: 15px; /* Smooth rounded corners */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); /* Gives a soft drop shadow for depth */
  overflow: hidden; /* Ensures content doesn't overflow the rounded corners */
}

.enhanced-video {
  width: 100%;
  height: auto;
  max-height: 85vh; /* Makes sure the video height doesn't exceed viewport height */
  object-fit: cover; /* Ensures the video covers the area without distortion */
}
</style>
