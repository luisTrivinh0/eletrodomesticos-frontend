<template>
    <div>
      <h2>Lista de Eletrodomésticos</h2>
      <ul>
        <li v-for="eletrodomestico in eletrodomesticos" :key="eletrodomestico.id">
          <h3>{{ eletrodomestico.nome }}</h3>
          <p>{{ eletrodomestico.descricao }}</p>
          <p>{{ eletrodomestico.tensao }}</p>
          <p>{{ eletrodomestico.marca }}</p>
        </li>
      </ul>
    </div>
  </template>

  <script>
  import api from '../api'

  export default {
    data() {
      return {
        eletrodomesticos: []
      }
    },
    mounted() {
      this.fetchEletrodomesticos()
    },
    methods: {
      fetchEletrodomesticos() {
        api.getEletrodomesticos()
          .then(response => {
            this.eletrodomesticos = response.data
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  }
  </script>