import { createRouter, createWebHistory } from 'vue-router';
import ListaEletrodomesticos from './components/ListaEletrodomesticos.vue';
import CadastroEletrodomestico from './components/CadastroEletrodomestico.vue';
import EditarEletrodomestico from './components/EditarEletrodomestico.vue';

const routes = [
  { path: '/', component: ListaEletrodomesticos },
  { path: '/cadastro', component: CadastroEletrodomestico, props: true },
  { path: '/editar/:id', component: EditarEletrodomestico }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;