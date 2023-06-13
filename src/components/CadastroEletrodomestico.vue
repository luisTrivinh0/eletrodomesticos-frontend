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
        alert('Eletrodoméstico cadastrado com sucesso.');
        this.resetForm();
        window.location.href = '/'
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