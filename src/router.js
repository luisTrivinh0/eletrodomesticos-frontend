import { createRouter, createWebHistory } from 'vue-router';
import ListaEletrodomesticos from './components/ListaEletrodomesticos.vue';
import CadastroEletrodomestico from './components/CadastroEletrodomestico.vue';

const routes = [
  { path: '/', component: ListaEletrodomesticos },
  { path: '/cadastro', component: CadastroEletrodomestico }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;