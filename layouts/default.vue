<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow px-16 bg-gray-900">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>
