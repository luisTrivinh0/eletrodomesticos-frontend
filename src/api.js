import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getEletrodomesticos() {
    return apiClient.get(`/eletrodomesticos`)
  },
  getEletrodomestico(id) {
    return apiClient.get(`/eletrodomesticos/${id}`)
  },
  createEletrodomestico(eletrodomestico) {
    return apiClient.post(`eletrodomesticos`, eletrodomestico)
  },
  updateEletrodomestico(id, eletrodomestico) {
    return apiClient.put(`/eletrodomesticos/${id}`, eletrodomestico)
  },
  deleteEletrodomestico(id) {
    return apiClient.delete(`/eletrodomesticos/${id}`)
  }
}