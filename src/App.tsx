import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componenets/footer/Footer';
import Navbar from './componenets/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              {/* Agora o caminho padrão "/" carrega a página Home direto */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
              <Route path="/temas" element={<div>Página de Temas (Exemplo)</div>} />
              <Route path="/cadastrartema" element={<div>Cadastro de Tema (Exemplo)</div>} />
              <Route path="/perfil" element={<div>Página de Perfil (Exemplo)</div>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
