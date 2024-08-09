<template>
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-16 flex flex-col items-center justify-center text-center"
  >
    <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Buscador de libros
    </h1>
    <p class="mt-4 text-lg leading-8 text-gray-300">
      Realizar la búsqueda del libro por su nombre, autor, etc.
    </p>
    <div class="flex mt-5 w-full px-20">
      <input
        v-model="searchQuery"
        id="text-address"
        name="text"
        type="text"
        autocomplete="text"
        required
        class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Buscar Libro..."
      />
      <button
        @click="searchBooks"
        type="submit"
        class="flex-none rounded-md bg-indigo-500 px-10 py-2.5 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Buscar
      </button>
      <button
        @click="goFavorities"
        type="submit"
        class="flex items-center rounded-md bg-gray-700 px-10 py-2.5 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
      >
        <svg
          class="w-4 h-4 text-yellow-300 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
          />
        </svg>
        Mis Favoritos
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBookStore } from '../store/bookStore'
import { useRouter } from 'vue-router'

const bookStore = useBookStore()
const searchQuery = ref('')
const router = useRouter()

const searchBooks = async  () => {
    await bookStore.searchBooks(searchQuery.value)
    router.push('/listOfBooks')
}

const goFavorities = async () => {
    router.push('/favorites')
}

</script>