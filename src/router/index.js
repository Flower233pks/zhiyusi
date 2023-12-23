import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FollowingView from '../views/FollowingView.vue'
import SearchView from '../views/SearchView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import Article from '../components/Article.vue'
import UserView from '@/views/UserView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'

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
    component: FollowingView
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
  },
  {
    path: '/article/:articleId',
    name: 'Article',
    component: Article
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    component: ArticleEdit
  },
  {
    path: '/edit-article/:id',
    name: 'EditArticle',
    component: ArticleEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
