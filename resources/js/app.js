import './bootstrap';

//import axios from "./components/config/axios";
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import App from './App.vue'

let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router).use(PrimeVue);
app.mount("#app");

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.isAuth)) {
  let token = localStorage.getItem('token');
  if (!token) {
  next("/login");
  } else {
  console.log(token);
  next(); // Mettre next() ici après avoir vérifié l'authentification
  }
  } else {
  next(); // Mettre next() ici si la route n'a pas besoin d'authentification
  }
  });
  