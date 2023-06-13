<template>
  <div>
    <h2>Lista de Eletrodomésticos</h2>
    <router-link to="/cadastro" class="btn btn-primary mb-3">Novo Eletrodoméstico</router-link>
    <table class="table table-bordered table-hover">
      <thead>
        <tr class="table-dark">
          <th class="text-center">Nome</th>
          <th class="text-center">Descrição</th>
          <th class="text-center">Tensão</th>
          <th class="text-center">Marca</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eletrodomestico in eletrodomesticos" :key="eletrodomestico.id">
          <td class="text-center">{{ eletrodomestico.nome }}</td>
          <td class="text-center">{{ eletrodomestico.descricao }}</td>
          <td class="text-center">{{ eletrodomestico.tensao }}</td>
          <td class="text-center">{{ eletrodomestico.marca }}</td>
          <td class="text-center">
            <button class="btn btn-danger m-1" @click="excluirEletrodomestico(eletrodomestico.id)">Excluir</button>
            <router-link :to="`/editar/${eletrodomestico.id}`" class="btn btn-primary">Editar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
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
    },
    excluirEletrodomestico(id) {
      api.deleteEletrodomestico(id)
        .then(() => {
          alert('Eletrodoméstico excluído com sucesso.')
          this.fetchEletrodomesticos()
        })
        .catch(error => {
          alert('Ocorreu um erro ao excluir o eletrodoméstico.')
          console.error(error)
        })
    }
  }
}
</script>