<template>
  <!-- Cleaner Dummy Navbar -->

  <nav
    class="fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-md bg-transparent border-b border-gray-300 p-4 pl-32 pr-32"
  >
    <!-- Left: Hero Pagin Text -->
    <div class="text-black text-xl font-bold">Hero Page</div>

    <!-- Right: Dummy Buttons for Login and Signup -->
    <div class="flex space-x-4">
      <Button> Login </Button>
      <Button> Signup </Button>
    </div>
  </nav>

  <!-- Centered Header with Description and Image -->
  <div class="flex flex-col items-center justify-center mt-32">
    <!-- Explore Button -->
    <BlurReveal :delay="0.1" :duration="0.6" :y-offset="-10" :blur="5">
      <a
        href="#"
        class="flex items-center border border-gray-400 text-gray-800 text-sm font-medium px-6 py-1 rounded-full mb-6 hover:bg-gray-100 transition"
      >
        <RadiantText :duration="10">✨Explore our Products</RadiantText>
        <svg
          class="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </BlurReveal>
    <!-- Move Heading Higher -->
    <BlurReveal :delay="0.1" :duration="0.6" :y-offset="-10" :blur="5">
      <p class="text-8xl font-bold text-center mb-2 text-black">
        Hero Page Demo
      </p>
    </BlurReveal>

    <!-- Short Description -->
    <BlurReveal :delay="0.2" :duration="0.6" :y-offset="-10" :blur="5">
      <p class="text-center text-lg text-gray-500 mt-2">
        Welcome to our Hero Page Demo. Explore the features and learn more about
        us.
      </p>
    </BlurReveal>
    <!-- Dummy Image -->

    <BlurReveal :delay="0.3" :duration="0.6" :y-offset="10" :blur="5">
      <img
        src="https://via.placeholder.com/600x300"
        alt="Dummy Image"
        class="mt-6 rounded-lg shadow-lg"
      />
    </BlurReveal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlurReveal from "~/components/inspira-ui/BlurReveal.vue";
import RadiantText from "~/components/inspira-ui/RadiantText.vue";
</script>
