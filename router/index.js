import { createRouter, createWebHistory } from 'vue-router'
import ListOfBooksView from '../pages/listOfBooks/index.vue'
import FavoritesView from '../pages/favorites/index.vue'
import BookDetails from '../pages/book/index.vue'  // Ajusta esto si el nombre de la carpeta o archivo es diferente

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ListOfBooksView
  },
  {
    path: '/listOfBooks',
    name: 'ListOfBooks',
    component: ListOfBooksView
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesView
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: BookDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
