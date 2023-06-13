<template>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome:</label>
        <input id="nome" v-model="nome" type="text" class="form-control" placeholder="Ex. Geladeira">
      </div>
      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição:</label>
        <textarea id="descricao" v-model="descricao" class="form-control"></textarea>
      </div>
      <div class="mb-3">
        <label for="tensao" class="form-label">Tensão:</label>
        <input id="tensao" v-model="tensao" type="text" class="form-control" placeholder="110v ou 220v">
      </div>
      <div class="mb-3">
        <label for="marca" class="form-label">Marca:</label>
        <select id="marca" v-model="marca" class="form-select">
          <option value="" selected disabled>Selecione uma marca</option>
          <option value="Electrolux">Electrolux</option>
          <option value="Brastemp">Brastemp</option>
          <option value="Fischer">Fischer</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
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
    mounted() {
      this.fetchEletrodomestico()
    },
    methods: {
      fetchEletrodomestico() {
        const eletrodomesticoId = this.$route.params.id
        api.getEletrodomestico(eletrodomesticoId)
          .then(response => {
            const eletrodomestico = response.data
            this.nome = eletrodomestico.nome
            this.descricao = eletrodomestico.descricao
            this.tensao = eletrodomestico.tensao
            this.marca = eletrodomestico.marca
          })
          .catch(error => {
            console.error(error)
          })
      },
      submitForm() {
        const eletrodomesticoId = this.$route.params.id
        const eletrodomestico = {
          nome: this.nome,
          descricao: this.descricao,
          tensao: this.tensao,
          marca: this.marca
        }

        api.updateEletrodomestico(eletrodomesticoId, eletrodomestico)
          .then(() => {
            alert('Eletrodoméstico atualizado com sucesso.')
            this.resetForm()
            this.$router.push('/') // Redireciona para a lista de eletrodomésticos após a edição
          })
          .catch(error => {
            alert('Ocorreu um erro ao atualizar o eletrodoméstico.')
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