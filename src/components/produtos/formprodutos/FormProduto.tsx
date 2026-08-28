import { useEffect, useState, type FormEvent } from "react";
import type { NutriScore } from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import axios from "axios";

export type NovoProduto = {
  name: string;
  description: string;
  price: number;
  category: string;
  categoria: Categoria;
  nutriScore: NutriScore;
};

type FormProdutoProps = {
  aoAdicionarProduto: (produto: NovoProduto) => Promise<void>;
  aoFechar: () => void;
};

function FormProduto({ aoAdicionarProduto, aoFechar }: FormProdutoProps) {
  const [produto, setProduto] = useState({
    name: "",
    description: "",
    price: "",
    categoriaId: "",
    nutriScore: "C" as NutriScore,
  });
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    queueMicrotask(
      () =>
        void buscar("/categoria", setCategorias).catch((error: unknown) => {
          if (axios.isAxiosError(error))
            alert(`Erro ao buscar categorias (${error.response?.status})`);
        }),
    );
  }, []);

  function atualizarCampo(campo: string, valor: string) {
    setProduto((atual) => ({ ...atual, [campo]: valor }));
  }

  async function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const categoriaSelecionada = categorias.find(
      (categoria) => String(categoria.id) === produto.categoriaId,
    );
    if (
      !produto.name.trim() ||
      !produto.description.trim() ||
      Number(produto.price) <= 0 ||
      !categoriaSelecionada
    )
      return;

    setIsSubmitting(true);
    try {
      await aoAdicionarProduto({
        name: produto.name.trim(),
        description: produto.description.trim(),
        price: Number(produto.price),
        category: categoriaSelecionada.tipo,
        categoria: categoriaSelecionada,
        nutriScore: produto.nutriScore,
      });
      setProduto({
        name: "",
        description: "",
        price: "",
        categoriaId: "",
        nutriScore: "C",
      });
      aoFechar();
    } catch (error) {
      if (axios.isAxiosError(error))
        alert(`Erro ao cadastrar produto (${error.response?.status})`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) aoFechar();
      }}
    >
      <form className="seller-form" onSubmit={enviarFormulario}>
        <div className="seller-form-heading">
          <div>
            <span className="section-kicker">Área do vendedor</span>
            <h2>Adicionar produto</h2>
          </div>
          <button
            className="modal-close"
            type="button"
            aria-label="Fechar formulário"
            onClick={aoFechar}
          >
            ×
          </button>
        </div>
        <div className="seller-form-grid">
          <label>
            Nome do produto
            <input
              required
              value={produto.name}
              onChange={(event) => atualizarCampo("name", event.target.value)}
              placeholder="Ex.: Smash especial"
            />
          </label>
          <label>
            Preço
            <input
              required
              min="0.01"
              step="0.01"
              type="number"
              value={produto.price}
              onChange={(event) => atualizarCampo("price", event.target.value)}
              placeholder="0,00"
            />
          </label>
          <label className="seller-form-wide">
            Categoria
            <select
              required
              value={produto.categoriaId}
              onChange={(event) =>
                atualizarCampo("categoriaId", event.target.value)
              }
            >
              <option value="">Selecione uma categoria cadastrada</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.tipo}
                </option>
              ))}
            </select>
          </label>
          <label className="seller-form-wide">
            Descrição
            <textarea
              required
              value={produto.description}
              onChange={(event) =>
                atualizarCampo("description", event.target.value)
              }
              placeholder="Descreva os ingredientes do produto"
              rows={3}
            />
          </label>
        </div>
        <div className="seller-form-bottom">
          <label>
            Nutri-Score
            <select
              value={produto.nutriScore}
              onChange={(event) =>
                atualizarCampo("nutriScore", event.target.value)
              }
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
          </label>
          <button
            className="seller-submit"
            disabled={isSubmitting || categorias.length === 0}
            type="submit"
          >
            {isSubmitting ? "Salvando..." : "Adicionar produto"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProduto;
