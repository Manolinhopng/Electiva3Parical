import { createRouter, createWebHistory } from 'vue-router';
import CreateRol from '../components/createRol.vue';
import CreateUser from '../components/createUser.vue';
import User from '../components/users.vue';

const routes = [
  { path: '/', redirect: '/createRol' },
  { path: '/createRol', component: CreateRol },
  { path: '/createUser', component: CreateUser },
  { path: '/user', component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
