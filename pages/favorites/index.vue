<template>
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-white">Favoritos</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        <Book
          v-for="book in favorites"
          :key="book.key"
          :book="book"
        />
      </div>
      <p v-if="favorites.length === 0" class="text-gray-400 mt-6">No tienes libros favoritos aún.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Book from '~/components/Book.vue'
  
  const favorites = ref([])
  
  onMounted(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    favorites.value = storedFavorites
  })
  </script>
  