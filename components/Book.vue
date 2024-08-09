<template>
  <div
    class="bg-gray-800 rounded-lg p-4 text-white cursor-pointer hover:bg-gray-700 transition-colors duration-300"
    @click="goToDetails"
  >
    <h2 class="text-lg font-semibold">{{ book.title }}</h2>
    <div class="flex justify-between">
      <div class="mr-5 items-center">
        <p class="mt-2 text-sm text-gray-400">Autor: {{ book.author_name?.[0] || 'Desconocido' }}</p>
        <p class="mt-1 text-sm text-gray-400">Publicado: {{ book.first_publish_year || 'N/A' }}</p>
      </div>
      <StarButton :book="book" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import StarButton from '~/components/StarButton.vue'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const goToDetails = () => {
  router.push({ name: 'BookDetails', params: { id: props.book.key } })
}
</script>
