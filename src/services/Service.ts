import axios from 'axios'
import type { Produto, NutriScore } from '../models/Produto'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'https://deliveryapi-0oi7.onrender.com',
	headers: { 'Content-Type': 'application/json' },
})

export async function listarProdutos(): Promise<Produto[]> {
	const response = await api.get<Produto[]>('/produtos')
	return response.data
}

export async function listarProdutosPorNutriScore(nutriScore: NutriScore): Promise<Produto[]> {
	const response = await api.get<Produto[]>(`/produtos/nutriscore/${nutriScore}`)
	return response.data
}
