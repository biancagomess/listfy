import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="menu">
        <div className="logo">
          <img
            src='/shopping-cart.png'
            alt="Carrinho de compras"
            className="cart-icon"
          />
          <h1 className="listify">LISTFY</h1>
        </div>
        <h2 className="main-heading">
          Uma forma mais rápida e prática para fazer suas listas de compras
        </h2>
        <p className="subheading">Experimente agora!</p>
        <ul>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">CADASTRE-SE</Link></li>
        </ul>
      </div>
    </div>
  );
};


export default Home;
