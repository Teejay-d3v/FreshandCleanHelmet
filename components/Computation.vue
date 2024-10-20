<template>
  <div class="bg-gradient-to-r from-blue-300 to-teal-100">
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-6">Potential Income Computation</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">With our HelmetPro vending machines, you can tap into a lucrative market. Here’s a breakdown of potential earnings based on different utilization assumptions:</p>
        </div>
      </div>
    </section>

    <section class="text-gray-700 body-font pb-20">
  <div class="container mx-auto px-5">
    <!-- Grid Layout -->
    <div class="grid gap-12 grid-cols-1 md:grid-cols-3">
      <!-- Assumption 1 -->
      <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        <!-- Heading -->
        <div class="mb-4">
          <h2 class="text-2xl font-semibold text-indigo-800 mb-2">Assumption 1: 90-100% Utilization</h2>
          <p class="text-sm text-indigo-600">If your machine is running at 90-100% capacity throughout the day:</p>
        </div>
        <!-- Income Breakdown -->
        <div>
          <ul class="space-y-3 text-lg">
            <li><span class="font-semibold">Daily Income:</span> ₱6,923.08</li>
            <li><span class="font-semibold">Weekly Income:</span> ₱48,461.54</li>
            <li><span class="font-semibold">Monthly Income:</span> ₱209,230.77</li>
          </ul>
        </div>
      </div>

      <!-- Assumption 2 -->
      <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        <!-- Heading -->
        <div class="mb-4">
          <h2 class="text-2xl font-semibold text-indigo-800 mb-2">Assumption 2: 50% Utilization</h2>
          <p class="text-sm text-indigo-600">If your machine is running at half capacity during its operating hours:</p>
        </div>
        <!-- Income Breakdown -->
        <div>
          <ul class="space-y-3 text-lg">
            <li><span class="font-semibold">Daily Income:</span> ₱3,461.54</li>
            <li><span class="font-semibold">Weekly Income:</span> ₱24,230.77</li>
            <li><span class="font-semibold">Monthly Income:</span> ₱103,846.15</li>
          </ul>
        </div>
      </div>

      <!-- Assumption 3 -->
      <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        <!-- Heading -->
        <div class="mb-4">
          <h2 class="text-2xl font-semibold text-indigo-800 mb-2">Assumption 3: 25% Utilization</h2>
          <p class="text-sm text-indigo-600">If your machine is running at 25% capacity throughout the day:</p>
        </div>
        <!-- Income Breakdown -->
        <div>
          <ul class="space-y-3 text-lg">
            <li><span class="font-semibold">Daily Income:</span> ₱1,730.77</li>
            <li><span class="font-semibold">Weekly Income:</span> ₱12,115.38</li>
            <li><span class="font-semibold">Monthly Income:</span> ₱51,923.08</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



    
  </div>
</template>

<script setup>

</script>

<stylescoped>

</stylescoped>