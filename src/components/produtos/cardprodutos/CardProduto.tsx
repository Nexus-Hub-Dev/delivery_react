import { Heart, Star, Clock, PencilSimple, Trash } from '@phosphor-icons/react'
import type { NutriScore } from '../../../models/Produto'


type DadosCardProduto = {
  id: number
  name: string
  description: string
  price: number
  category: string
  rating: string
  time: string
  image: string
  nutriScore: NutriScore
  badge?: string
}

type PropriedadesCardProduto = {
  produto: DadosCardProduto
  favorito: boolean
  aoAlternarFavorito: (id: number) => void
  formatarPreco: (preco: number) => string
  aoEditar: (produto: DadosCardProduto) => void
  aoRemoverProduto: (id: number) => void
}

function CardProduto({ produto, favorito, aoAlternarFavorito, formatarPreco, aoEditar, aoRemoverProduto }: PropriedadesCardProduto) {
  return (
    <article className="product-card">
      <div className={`product-image product-${produto.id}`}>
        <span>{produto.image}</span>
        {produto.badge && <b>{produto.badge}</b>}
        <div className={`nutri-badge score-${produto.nutriScore.toLowerCase()}`} aria-label={`Nutri-Score ${produto.nutriScore}`}>N<span>{produto.nutriScore}</span></div>
        <button className={favorito ? 'favorite selected' : 'favorite'} type="button" aria-label={`Favoritar ${produto.name}`} onClick={() => aoAlternarFavorito(produto.id)}>
          <Heart size={18} weight={favorito ? 'fill' : 'regular'} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-meta"><span><Star size={14} weight="fill" /> {produto.rating}</span><span><Clock size={14} /> {produto.time}</span></div>
        <h3>{produto.name}</h3>
        <p>{produto.description}</p>
        <div className="product-footer">
          <strong>{formatarPreco(produto.price)}</strong>
          <div className="product-actions" aria-label={`Ações para ${produto.name}`}>
            <button type="button" className="product-action edit" aria-label={`Editar ${produto.name}`} onClick={() => aoEditar(produto)}>
              <PencilSimple size={16} />
            </button>
            <button type="button" className="product-action delete" aria-label={`Remover ${produto.name}`} onClick={() => aoRemoverProduto(produto.id)}>
              <Trash size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardProduto