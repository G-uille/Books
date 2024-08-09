<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-white">Lista de Libros</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <Book
        v-for="book in bookStore.searchResults"
        :key="book.key"
        :book="book"
      />
    </div>
    <p v-if="bookStore.searchResults.length === 0" class="text-gray-400 mt-6">No tienes una lista de libros aún.</p>
  </div>
</template>

<script setup>
import { useBookStore } from '~/store/bookStore'
import Book from '~/components/Book.vue'

const bookStore = useBookStore()
</script>
