import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";

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

  const renderNavItem = (item: NavItem, closeMenu = false) => (
    <li key={item.label}>
      <Link
        to={item.path}
        onClick={closeMenu ? () => setIsOpen(false) : undefined}
        className="site-nav-link"
        aria-label={item.label}
        title={item.label}
      >
        {item.path === "/carrinho" ? (
          <ShoppingCart size={21} aria-hidden="true" />
        ) : (
          item.label
        )}
      </Link>
    </li>
  );

  return (
    <header className="site-navbar">
      <nav className="site-navbar-inner">
        <Link to="/" className="site-logo">
          <span>NEXUS</span>
          <strong>DELIVERY</strong>
        </Link>
        <ul className="site-nav-links">
          {navItems.map((item) => renderNavItem(item))}
        </ul>
        <div className="site-nav-cta">
          <Link to="/login" className="site-nav-button">
            Entrar
          </Link>
        </div>
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
      {isOpen && (
        <div className="site-mobile-menu">
          <ul>
            {navItems.map((item) => renderNavItem(item, true))}
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
