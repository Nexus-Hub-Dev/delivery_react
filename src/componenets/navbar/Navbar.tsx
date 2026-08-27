import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/#equipe' },
  { label: 'Categorias', path: '/categorias' },
  { label: 'Carrinho', path: '/carrinho' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-1 text-2xl font-bold tracking-wide">
          <span className="text-purple-500">NEXUS</span>
          <span className="text-slate-100">DELIVERY</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.path.startsWith('#') ? (
                <a
                  href={item.path}
                  className="text-slate-300 hover:text-purple-400 font-medium text-1xl transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="text-slate-300 hover:text-purple-400 font-medium text-1xl transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* BOTÃO CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contato"
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-purple-600/20 transition-all"
          >
            Entrar
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Abrir Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MENU MOBILE EXPANSÍVEL */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
          <ul className="flex flex-col gap-4 mt-4 list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.path.startsWith('#') ? (
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-purple-400 font-medium text-base transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-purple-400 font-medium text-base transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all"
              >
                Entrar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;