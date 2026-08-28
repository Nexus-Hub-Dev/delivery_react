import ListaCategorias from '../../components/categorias/listacategorias/ListaCategorias'
import { Link } from 'react-router-dom'

function Categorias() {
  return <main className="categories-page"><section className="page-heading"><div><span className="section-kicker">Organização do cardápio</span><h1>Categorias</h1><p>Consulte as categorias cadastradas para manter os produtos fáceis de encontrar.</p></div><Link className="open-category-form" to="/cadastrarcategoria">+ Nova categoria</Link></section><ListaCategorias /></main>
}

export default Categorias
