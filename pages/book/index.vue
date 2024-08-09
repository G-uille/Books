<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-white">{{ book.title }}</h1>
    <p class="text-lg text-gray-300">Autor: {{ book.author_name?.[0] || 'Desconocido' }}</p>
    <p class="text-lg text-gray-300">Publicado: {{ book.first_publish_year || 'N/A' }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBookStore } from '~/store/bookStore'

const route = useRoute()
const bookStore = useBookStore()
const book = ref(null)

onMounted(() => {
  const bookId = route.params.id
  book.value = bookStore.searchResults.find(b => b.key === bookId)
})
</script>
