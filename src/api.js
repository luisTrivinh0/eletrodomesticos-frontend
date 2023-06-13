import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getEletrodomesticos() {
    return apiClient.get('/eletrodomesticos')
  },
  createEletrodomestico(eletrodomestico) {
    return apiClient.post('/eletrodomesticos', eletrodomestico)
  }
  // Implemente métodos adicionais para atualizar e remover eletrodomésticos, se necessário
}