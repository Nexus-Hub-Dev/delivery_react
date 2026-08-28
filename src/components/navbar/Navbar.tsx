import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Produto", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Categorias", path: "/categorias" },
  { label: "Carrinho", path: "/carrinho" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="site-navbar">
      <nav className="site-navbar-inner">
        {/* LOGO */}
        <Link to="/" className="site-logo">
          <span>NEXUS</span>
          <strong>DELIVERY</strong>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="site-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.path.startsWith("#") ? (
                <a href={item.path} className="site-nav-link">
                  {item.label}
                </a>
              ) : (
                <Link to={item.path} className="site-nav-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* BOTÃO CTA */}
        <div className="site-nav-cta">
          <a href="#contato" className="site-nav-button">
            Entrar
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="site-menu-button"
          aria-label="Abrir Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* MENU MOBILE EXPANSÍVEL */}
      {isOpen && (
        <div className="site-mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="site-nav-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="site-nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="site-nav-button"
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
