<template>
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-16 flex flex-col items-center justify-center text-center w-full"
  >
    <h1 class="text-white font-semibold">Aquí se mostrarán los resultados de tus libros.</h1>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Buscador de libros",
});
</script>
