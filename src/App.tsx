import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importação dos seus componentes de Categoria
import ListarCategorias from './components/categorias/listacategorias/ListaCategorias';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';

// Importação dos seus componentes de Produto (exemplo baseado na sua estrutura)
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';

function App() {
  return (
    <>
      {/* O BrowserRouter envolve toda a aplicação que precisa de navegação */}
      <BrowserRouter>
        {/* Aqui entraria o seu componente de Navbar (se tiver) */}
        
        {/* Container principal para empurrar o footer pra baixo e dar um respiro */}
        <div className="min-h-[80vh]"> 
          <Routes>
            {/* Rota inicial / Home */}
            <Route path="/" element={<ListaProdutos />} /> 

            {/* Rotas de Categorias */}
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            {/* O :id indica que a rota vai receber o ID da categoria na URL */}
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

            {/* Rotas de Produtos entrariam aqui da mesma forma */}
            <Route path="/produtos" element={<ListaProdutos />} />
            
          </Routes>
        </div>

        {/* Aqui entraria o seu componente de Footer (se tiver) */}
      </BrowserRouter>
    </>
  );
}

export default App;