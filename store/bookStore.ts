// stores/bookStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        searchQuery: '',
        searchResults: [],
      }),
      actions: {
        async searchBooks(query: string) {
          // Convierte espacios en la consulta en '+' para la URL
          this.searchQuery = query.trim().replace(/\s+/g, '+')
          
          try {
              const response = await axios.get(`https://openlibrary.org/search.json?q=${this.searchQuery}`)
              console.log("esta es la respuesta", response.data.docs)
              this.searchResults = response.data.docs
          } catch (error) {
            console.error('Error fetching books:', error)
          }
        }
      }
    })
