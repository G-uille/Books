<template>
    <div class="items-center flex">
      <button @click="toggleStar" class="focus:outline-none">
        <svg
          v-if="isSelected"
          class="w-6 h-6 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.513 8.176 1.175-5.919 5.762 1.396 8.131L12 18.897l-7.321 3.857 1.396-8.131-5.919-5.762 8.176-1.175L12 .587z"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 2.5l3.09 6.26 6.91 1.004-5 4.873 1.18 6.87L12 17.77l-6.18 3.237L7 14.637 2 9.764 8.91 8.5 12 2.5z"
          />
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  const props = defineProps({
    book: Object,
  })
  
  const isSelected = ref(false)
  
  const toggleStar = () => {
    isSelected.value = !isSelected.value
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  
    if (isSelected.value) {
      favorites.push(props.book)
    } else {
      const index = favorites.findIndex(fav => fav.key === props.book.key)
      if (index > -1) favorites.splice(index, 1)
    }
  
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
  
  watchEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    isSelected.value = favorites.some(fav => fav.key === props.book.key)
  })
  </script>
  