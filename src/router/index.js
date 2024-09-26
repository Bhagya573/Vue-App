import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions
import Home from '../views/Home.vue';
import PostDetail from '../views/PostDetail.vue';
import About from '../views/About.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;

