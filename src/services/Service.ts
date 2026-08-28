import axios from 'axios'
import type { Produto, NutriScore } from '../models/Produto'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'https://deliveryapi-0oi7.onrender.com',
	headers: { 'Content-Type': 'application/json' },
})

// 1. Método GET (Listar todos ou Buscar por ID)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
}

// 2. Método POST (Cadastrar Categoria ou Produto)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

// 3. Método PUT (Atualizar Categoria ou Produto)
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
}

// 4. Método DELETE (Deletar)
export const deletar = async (url: string) => {
  await api.delete(url);
}

export async function listarProdutos(): Promise<Produto[]> {
	const response = await api.get<Produto[]>('/produtos')
	return response.data
}

export async function listarProdutosPorNutriScore(nutriScore: NutriScore): Promise<Produto[]> {
	const response = await api.get<Produto[]>(`/produtos/nutriscore/${nutriScore}`)
	return response.data
}
