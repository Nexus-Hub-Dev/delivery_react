import { useState, type FormEvent } from 'react'
import type { NutriScore } from '../../../models/Produto'

export type NovoProduto = {
  name: string
  description: string
  price: number
  category: string
  image: string
  nutriScore: NutriScore
}

type FormProdutoProps = {
  aoAdicionarProduto: (produto: NovoProduto) => void
  aoFechar: () => void
}

function FormProduto({ aoAdicionarProduto, aoFechar }: FormProdutoProps) {
  const [produto, setProduto] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Hambúrguer',
    image: '🍽️',
    nutriScore: 'C' as NutriScore,
  })

  function atualizarCampo(campo: string, valor: string) {
    setProduto((atual) => ({ ...atual, [campo]: valor }))
  }

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!produto.name.trim() || !produto.description.trim() || Number(produto.price) <= 0) return

    aoAdicionarProduto({ ...produto, name: produto.name.trim(), description: produto.description.trim(), price: Number(produto.price) })
    setProduto({ name: '', description: '', price: '', category: 'Hambúrguer', image: '🍽️', nutriScore: 'C' })
    aoFechar()
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) aoFechar() }}>
      <form className="seller-form" onSubmit={enviarFormulario}>
      <div className="seller-form-heading"><div><span className="section-kicker">Área do vendedor</span><h2>Adicionar produto</h2></div><button className="modal-close" type="button" aria-label="Fechar formulário" onClick={aoFechar}>×</button></div>
      <div className="seller-form-grid">
        <label>Nome do produto<input required value={produto.name} onChange={(event) => atualizarCampo('name', event.target.value)} placeholder="Ex.: Smash especial" /></label>
        <label>Preço<input required min="0.01" step="0.01" type="number" value={produto.price} onChange={(event) => atualizarCampo('price', event.target.value)} placeholder="0,00" /></label>
        <label>Categoria<select value={produto.category} onChange={(event) => atualizarCampo('category', event.target.value)}><option>Hambúrguer</option><option>Pizza</option><option>Saudável</option><option>Japonesa</option><option>Sobremesas</option></select></label>
        <label>Ícone<input value={produto.image} onChange={(event) => atualizarCampo('image', event.target.value)} placeholder="🍔" /></label>
        <label className="seller-form-wide">Descrição<textarea required value={produto.description} onChange={(event) => atualizarCampo('description', event.target.value)} placeholder="Descreva os ingredientes do produto" rows={3} /></label>
      </div>
      <div className="seller-form-bottom"><label>Nutri-Score<select value={produto.nutriScore} onChange={(event) => atualizarCampo('nutriScore', event.target.value)}><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></label><button className="seller-submit" type="submit">Adicionar produto</button></div>
      </form>
    </div>
  )
}

export default FormProduto
