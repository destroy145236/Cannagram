import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/DashBoard.vue';
import Login from '../components/auth/AuthLogin.vue';
import SignIn from '../components/auth/AuthSign.vue';
import AuthQr from '../components/auth/AuthQrc.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',  // Utilisez une chaîne de caractères pour le nom
    component: Home,  // Assignez le composant ici
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/Connexion',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Connexion'
    }
  },
  {
    path: '/Inscription',
    name: 'SignIn',  // Utilisez une chaîne de caractères pour le nom
    component: SignIn,  // Assignez le composant ici
    meta: {
      title: 'Inscription'
    }
  },
  {
    path: '/',
    name: 'AuthQr',  // Utilisez une chaîne de caractères pour le nom
    component: AuthQr,  // Assignez le composant ici
    meta: {
      title: 'Code QR'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Cannagram';
  next();
});

export default router;
