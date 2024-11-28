import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="menu">
        <h1>Bem-vindo ao Listfy</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Cadastrar-se</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
