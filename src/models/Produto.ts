export type NutriScore = "A" | "B" | "C" | "D" | "E";

import type Categoria from "./Categoria";

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem?: string;
  categoria?: string | Categoria;
  nutriScore: NutriScore;
}
