<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="nome">Nome:</label>
      <input id="nome" v-model="nome" type="text">
    </div>
    <div>
      <label for="descricao">Descrição:</label>
      <textarea id="descricao" v-model="descricao"></textarea>
    </div>
    <div>
      <label for="tensao">Tensão:</label>
      <input id="tensao" v-model="tensao" type="text">
    </div>
    <div>
      <label for="marca">Marca:</label>
      <select id="marca" v-model="marca">
        <option value="Electrolux">Electrolux</option>
        <option value="Brastemp">Brastemp</option>
        <option value="Fischer">Fischer</option>
        <option value="Samsung">Samsung</option>
        <option value="LG">LG</option>
      </select>
    </div>
    <button type="submit">Salvar</button>
  </form>
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      nome: '',
      descricao: '',
      tensao: '',
      marca: ''
    }
  },
  methods: {
    submitForm() {
      const eletrodomestico = {
        nome: this.nome,
        descricao: this.descricao,
        tensao: this.tensao,
        marca: this.marca
      }

      api.createEletrodomestico(eletrodomestico)
        .then(() => {
          alert('Eletrodoméstico cadastrado com sucesso.')
          this.resetForm()
        })
        .catch(error => {
          alert('Ocorreu um erro ao cadastrar o eletrodoméstico.')
          console.error(error)
        })
    },
    resetForm() {
      this.nome = ''
      this.descricao = ''
      this.tensao = ''
      this.marca = ''
    }
  }
}
</script>