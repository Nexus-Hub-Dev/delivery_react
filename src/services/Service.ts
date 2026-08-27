import axios from 'axios';

// Aqui fica a URL base da API. 
// Dica: Enquanto os meninos não terminam o deploy no Render, usem o localhost para ir testando!
export const api = axios.create({
  baseURL: 'http://localhost:8080'
});

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