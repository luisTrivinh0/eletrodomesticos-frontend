<template>
  <div id="app">
    <router-link to="/">Lista de Eletrodomésticos</router-link>
    <router-link to="/cadastro">Cadastrar Eletrodoméstico</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>