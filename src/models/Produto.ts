export type NutriScore = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Produto {
	id: number
	nome: string
	descricao: string
	preco: number
	imagem?: string
	categoria?: string
	nutriScore: NutriScore
}
