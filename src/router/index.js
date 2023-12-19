import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CareView from '../views/CareView.vue'
import SearchView from '../views/SearchView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import UserView from '@/views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/care',
    name: 'Care',
    component: CareView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
