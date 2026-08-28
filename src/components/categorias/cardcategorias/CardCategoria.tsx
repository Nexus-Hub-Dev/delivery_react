import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import IconeCategoria from "../IconeCategoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <article className="category-card">
      <header className="category-card-header">Categoria</header>

      <p className="category-card-name">{categoria.tipo}</p>
      <p className="category-card-description">
        <span className="category-card-icon">
          <IconeCategoria
            nome={categoria.tipo}
            icone={categoria.icone}
            tamanho={20}
          />
        </span>
        {categoria.descricao}
      </p>

      <div className="category-card-actions">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="category-edit-link"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="category-delete-link"
        >
          Deletar
        </Link>
      </div>
    </article>
  );
}

export default CardCategorias;
