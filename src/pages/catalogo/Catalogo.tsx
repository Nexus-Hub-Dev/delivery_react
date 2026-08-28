import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  MagnifyingGlass,
  MapPin,
  Sparkle,
  X,
} from "@phosphor-icons/react";
import type {
  NutriScore as ApiNutriScore,
  Produto,
} from "../../models/Produto";
import CardProduto from "../../components/produtos/cardprodutos/CardProduto";
import FormProduto from "../../components/produtos/formprodutos/FormProduto";
import type { NovoProduto } from "../../components/produtos/formprodutos/FormProduto";
import { NutriScoreFilter } from "../../components/produtos/nutriscore/NutriScoreFilter";
import {
  buscar,
  criarProduto,
  atualizarProduto,
  deletarProduto,
  listarProdutos,
  listarProdutosPorNutriScore,
} from "../../services/Service";
import type Categoria from "../../models/Categoria";
import IconeCategoria from "../../components/categorias/IconeCategoria";
import "../../App.css";

type NutriScore = ApiNutriScore;
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: string;
  time: string;
  image: string;
  nutriScore: NutriScore;
  badge?: string;
};

const fallbackCategories = [
  { name: "Todos", icon: <IconeCategoria icone="fork-knife" tamanho={18} /> },
  {
    name: "Hambúrguer",
    icon: <IconeCategoria nome="Hambúrguer" tamanho={18} />,
  },
  { name: "Pizza", icon: <IconeCategoria nome="Pizza" tamanho={18} /> },
  { name: "Massas", icon: <IconeCategoria icone="massa" tamanho={18} /> },
  { name: "Saudável", icon: <IconeCategoria nome="Saudável" tamanho={18} /> },
  { name: "Japonesa", icon: <IconeCategoria nome="Japonesa" tamanho={18} /> },
  {
    name: "Comida brasileira",
    icon: <IconeCategoria icone="brasileira" tamanho={18} />,
  },
  { name: "Vegana", icon: <IconeCategoria icone="vegana" tamanho={18} /> },
  {
    name: "Sobremesas",
    icon: <IconeCategoria nome="Sobremesas" tamanho={18} />,
  },
  { name: "Bebidas", icon: <IconeCategoria icone="bebidas" tamanho={18} /> },
  { name: "Café", icon: <IconeCategoria icone="cafe" tamanho={18} /> },
];
const products: Product[] = [
  {
    id: 1,
    name: "Smash da Casa",
    description: "Pão brioche, blend 160g, queijo e molho especial",
    price: 29.9,
    category: "Hambúrguer",
    rating: "4.9",
    time: "25-35 min",
    image: "🍔",
    nutriScore: "C",
    badge: "Mais pedido",
  },
  {
    id: 2,
    name: "Pizza Burrata",
    description: "Tomate confitado, burrata cremosa e manjericão",
    price: 54.9,
    category: "Pizza",
    rating: "4.8",
    time: "35-45 min",
    image: "🍕",
    nutriScore: "B",
  },
  {
    id: 3,
    name: "Poke Fresh",
    description: "Salmão, arroz japonês, avocado e molho ponzu",
    price: 38.5,
    category: "Saudável",
    rating: "4.9",
    time: "20-30 min",
    image: "🥗",
    nutriScore: "A",
    badge: "Leve",
  },
  {
    id: 4,
    name: "Combo Crocante",
    description: "10 peças variadas, shoyu e wasabi da casa",
    price: 42,
    category: "Japonesa",
    rating: "4.7",
    time: "30-40 min",
    image: "🍣",
    nutriScore: "B",
  },
  {
    id: 5,
    name: "Brownie Quente",
    description: "Brownie de chocolate, calda e sorvete de baunilha",
    price: 22.9,
    category: "Sobremesas",
    rating: "4.8",
    time: "20-30 min",
    image: "🍰",
    nutriScore: "D",
  },
  {
    id: 6,
    name: "Batata Trufada",
    description: "Batata crocante, parmesão e maionese trufada",
    price: 19.9,
    category: "Hambúrguer",
    rating: "4.6",
    time: "25-35 min",
    image: "🍟",
    nutriScore: "C",
  },
];

const apiProductToProduct = (product: Produto): Product => ({
  id: product.id,
  name: product.nome,
  description: product.descricao,
  price: product.preco,
  category:
    typeof product.categoria === "string"
      ? product.categoria
      : product.categoria?.tipo || "Todos",
  rating: "4.8",
  time: "25-35 min",
  image: product.imagem || "🍽️",
  nutriScore: product.nutriScore,
});

function Catalogo() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeNutriScore, setActiveNutriScore] = useState<
    "Todos" | NutriScore
  >("Todos");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [catalogProducts, setCatalogProducts] = useState(products);
  const [apiUnavailable, setApiUnavailable] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    let cancelled = false;
    const loadProducts = async () => {
      try {
        const data =
          activeNutriScore === "Todos"
            ? await listarProdutos()
            : await listarProdutosPorNutriScore(activeNutriScore);
        if (!cancelled && data.length) {
          setCatalogProducts(data.map(apiProductToProduct));
          setApiUnavailable(false);
        }
      } catch {
        if (!cancelled) setApiUnavailable(true);
      }
    };
    void loadProducts();
    return () => {
      cancelled = true;
    };
  }, [activeNutriScore]);
  useEffect(() => {
    queueMicrotask(
      () =>
        void buscar<Categoria[]>("/categoria", (data) =>
          setCategories([
            {
              name: "Todos",
              icon: <IconeCategoria icone="fork-knife" tamanho={18} />,
            },
            ...data.map((categoria) => ({
              name: categoria.tipo,
              icon: (
                <IconeCategoria
                  nome={categoria.tipo}
                  icone={categoria.icone}
                  tamanho={18}
                />
              ),
            })),
          ]),
        ),
    );
  }, []);
  const filteredProducts = useMemo(
    () =>
      catalogProducts.filter((product) => {
        const matchesCategory =
          activeCategory === "Todos" || product.category === activeCategory;
        const matchesNutriScore =
          activeNutriScore === "Todos" ||
          product.nutriScore === activeNutriScore;
        const query = search.toLowerCase();
        return (
          matchesCategory &&
          matchesNutriScore &&
          (product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query))
        );
      }),
    [activeCategory, activeNutriScore, catalogProducts, search],
  );
  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const addProduct = async (newProduct: NovoProduto) => {
    const savedProduct = await criarProduto({
      nome: newProduct.name,
      descricao: newProduct.description,
      preco: newProduct.price,
      nutriScore: newProduct.nutriScore,
      categoria: newProduct.categoria,
    });
    setCatalogProducts((current) => [
      ...current,
      apiProductToProduct(savedProduct),
    ]);
  };
  const editProduct = async (updatedProduct: NovoProduto) => {
    if (!editingProduct) return;
    const savedProduct = await atualizarProduto(editingProduct.id, {
      nome: updatedProduct.name,
      descricao: updatedProduct.description,
      preco: updatedProduct.price,
      nutriScore: updatedProduct.nutriScore,
      categoria: updatedProduct.categoria,
    });
    setCatalogProducts((current) => current.map((product) =>
      product.id === editingProduct.id ? apiProductToProduct(savedProduct) : product,
    ));
  };
  const removeProduct = async (id: number) => {
    const product = catalogProducts.find((item) => item.id === id);
    if (!product || !window.confirm(`Remover o produto "${product.name}"?`)) return;
    await deletarProduto(id);
    setCatalogProducts((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="app-shell">
      <main id="inicio">
        <section className="welcome-section">
          <div className="welcome-copy">
            <div className="eyebrow">
              <Sparkle size={15} weight="fill" /> Tudo para matar sua fome
            </div>
            <h1>
              Seu próximo
              <br />
              <em>pedido favorito</em>
              <br />
              está aqui.
            </h1>
            <p>
              Descubra sabores incríveis de restaurantes perto de você, com
              entrega rápida e sem complicação.
            </p>
            <div className="search-box">
              <MagnifyingGlass size={21} />
              <input
                aria-label="Buscar pratos ou restaurantes"
                placeholder="Busque por prato ou restaurante"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button
                  type="button"
                  aria-label="Limpar busca"
                  onClick={() => setSearch("")}
                >
                  <X size={17} />
                </button>
              )}
              <button className="search-action" type="button">
                Buscar
              </button>
            </div>
          </div>
          <div className="welcome-art">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="delivery-card">
              <div className="mini-card-head">
                <span className="brand-mark small">N</span>
                <span className="status">
                  <span /> Entrega acompanhada
                </span>
              </div>
              <div className="map-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="route">
                <div className="route-point start">
                  <MapPin size={17} weight="fill" />
                </div>
                <div className="route-line">
                  <b>Seu pedido está a caminho</b>
                  <small>Chega em aproximadamente 18 min</small>
                </div>
                <div className="route-point end">
                  <Check size={15} weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-layout" id="explorar">
          <div className="catalog">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Escolha sem pressa</span>
                <h2>O que você está com vontade?</h2>
              </div>
              <button className="text-button" type="button">
                Ver todos <ArrowRight size={16} />
              </button>
            </div>
            {apiUnavailable && (
              <div className="api-notice">
                Exibindo sugestões enquanto conectamos ao cardápio online.
              </div>
            )}
            <div className="category-list">
              {categories.map((category) => (
                <button
                  className={
                    activeCategory === category.name
                      ? "category active"
                      : "category"
                  }
                  type="button"
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            <NutriScoreFilter
              activeScore={activeNutriScore}
              onChange={setActiveNutriScore}
            />
            <button
              className="open-seller-modal"
              type="button"
              onClick={() => setIsProductModalOpen(true)}
            >
              + Adicionar produto
            </button>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <CardProduto
                  key={product.id}
                  produto={product}
                  favorito={favorites.includes(product.id)}
                  aoAlternarFavorito={(id) =>
                    setFavorites((current) =>
                      current.includes(id)
                        ? current.filter((favoriteId) => favoriteId !== id)
                        : [...current, id],
                    )
                  }
                  formatarPreco={formatPrice}
                  aoEditar={(product) => {
                    setEditingProduct(product);
                    setIsProductModalOpen(true);
                  }}
                  aoRemoverProduto={(id) => void removeProduct(id)}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="empty-state">
                Nenhum prato encontrado para essa busca.
              </div>
            )}
            {isProductModalOpen && (
              <FormProduto
                aoAdicionarProduto={editingProduct ? editProduct : addProduct}
                produtoInicial={editingProduct || undefined}
                modoEdicao={Boolean(editingProduct)}
                aoFechar={() => {
                  setIsProductModalOpen(false);
                  setEditingProduct(null);
                }}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Catalogo;
