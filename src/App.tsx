import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./pages/catalogo/Catalogo";
import Sobre from "./pages/sobre/Sobre";
import Categorias from "./pages/categorias/Categorias";
import Carrinho from "./pages/carrinho/Carrinho";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
