import React, { useState } from 'react';
import './NavMenu.css';
import { Link, useNavigate } from 'react-router-dom';

const NavMenu = () => {
  const [showListas, setShowListas] = useState(false);
  const [showItens, setShowItens] = useState(false);
  const [showUsuarios, setShowUsuarios] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

 
  return (
    <nav className="navmenu">
      <ul className="navmenu-items">
        <li className="menu-item project-name">
          <img
            src='/shopping-cart.png'
            alt="Carrinho de compras"
            className="cart-icon"
          />
          <Link to="/dashboard" className="listfy">LISTFY</Link>
        </li>
        <li className="menu-item" onMouseEnter={() => setShowListas(true)} onMouseLeave={() => setShowListas(false)}>
          Listas
          {showListas && (
            <ul className="dropdown">
              <li><Link to="/listas">Minhas listas</Link></li>
              <li><Link to="/cadastro-lista">Adicionar lista</Link></li>
              {/* <li><Link to="/editar-lista">Editar a lista</Link></li> */}
            </ul>
          )}
        </li>
        <li className="menu-item" onMouseEnter={() => setShowItens(true)} onMouseLeave={() => setShowItens(false)}>
          Itens
          {showItens && (
            <ul className="dropdown">
              <li><Link to="/items/1">Meus itens</Link></li>
              <li><Link to="/cadastro-item">Adicinar item</Link></li>
              {/* <li><Link to="/editar-item">Editar um item</Link></li> */}
            </ul>
          )}
        </li>
        <li className="menu-item" onMouseEnter={() => setShowCategorias(true)} onMouseLeave={() => setShowCategorias(false)}>
          Categorias
          {showCategorias && (
            <ul className="dropdown">
              <li><Link to="/categorias">Minhas categorias</Link></li>
              <li><Link to="/cadastro-categoria">Adicionar categoria</Link></li>
              {/* <li><Link to="/editar-categoria">Editar uma categoria</Link></li> */}
            </ul>
          )}
        </li>
        <li className="menu-item" onMouseEnter={() => setShowUsuarios(true)} onMouseLeave={() => setShowUsuarios(false)}>
          Minha conta
          {showUsuarios && (
            <ul className="dropdown">
              <li><Link to="/usuarios"> Meu perfil</Link></li>
              <li><Link to="/cadastro-usuario">Cadastrar novo usuário</Link></li>
              {/* <li><Link to="/editar-usuario">Editar um usuário</Link></li> */}
            </ul>
          )}
        </li>
        <li className="menu-item logout">
          <button onClick={handleLogout}>
            <img
              src="./logout.png"
              alt="Logout"
              className="logout-icon"
              title="Logout"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;