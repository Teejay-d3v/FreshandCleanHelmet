<template>
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div class="faq-item" v-for="(item, index) in faqs" :key="index">
      <div 
        class="faq-question" 
        @click="toggleFAQ(index)"
      >
        <h3>{{ item.question }}</h3>
        <span class="faq-icon" :class="{ 'open': activeIndex === index }">
          <span v-if="activeIndex === index">−</span>
          <span v-else>+</span>
        </span>
      </div>
      <transition name="fade">
        <p v-if="activeIndex === index" class="faq-answer">{{ item.answer }}</p>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'What is Helmet Pro?',
    answer: 'Helmet Pro provides a revolutionary vending machine experience for helmet cleaning, combining advanced technology with convenience for every rider.',
  },
  {
    question: 'How does the vending machine work?',
    answer: 'Simply select the cleaning service you need and follow the prompts to clean your helmet in under 5 minutes.',
  },
  {
    question: 'Where can I find a Helmet Pro machine?',
    answer: 'You can find our machines at various locations, including shopping malls, gas stations, and riding clubs.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods, including credit/debit cards, mobile wallets, and cash.',
  },
]);

const activeIndex = ref(-1);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.faq-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.faq-item {
  margin-bottom: 1rem;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: #f1f1f1;
}

.faq-answer {
  padding: 1rem;
  border-left: 4px solid #007bff;
  background-color: #e9ecef;
}

.faq-icon {
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.faq-icon.open {
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, 
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
