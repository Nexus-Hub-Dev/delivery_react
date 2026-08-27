import { Heart, Star, Clock } from '@phosphor-icons/react'
import type { NutriScore } from '../models/Produto'

type ProductCardData = {
  id: number
  name: string
  description: string
  price: number
  rating: string
  time: string
  image: string
  nutriScore: NutriScore
  badge?: string
}

type ProductCardProps = {
  product: ProductCardData
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  formatPrice: (price: number) => string
}

export function ProductCard({ product, isFavorite, onToggleFavorite, formatPrice }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className={`product-image product-${product.id}`}>
        <span>{product.image}</span>
        {product.badge && <b>{product.badge}</b>}
        <div className={`nutri-badge score-${product.nutriScore.toLowerCase()}`} aria-label={`Nutri-Score ${product.nutriScore}`}>N<span>{product.nutriScore}</span></div>
        <button className={isFavorite ? 'favorite selected' : 'favorite'} type="button" aria-label={`Favoritar ${product.name}`} onClick={() => onToggleFavorite(product.id)}>
          <Heart size={18} weight={isFavorite ? 'fill' : 'regular'} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-meta"><span><Star size={14} weight="fill" /> {product.rating}</span><span><Clock size={14} /> {product.time}</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer"><strong>{formatPrice(product.price)}</strong></div>
      </div>
    </article>
  )
}
