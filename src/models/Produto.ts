import type Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  nutriScore: string;
  calorias: number;
  categoria: Categoria | null;
}