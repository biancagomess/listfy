import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaCard.css';

const ListaCard = ({ lista }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listas/${lista.id}`);
  };

  return (
    <div className="lista-card" onClick={handleClick}>
      <h3>{lista.nome}</h3>
      <p>ID: {lista.id}</p>
      <ul>
        {lista.itens && lista.itens.length > 0 ? (
          lista.itens.map((item) => (
            <li key={item.id}>
            <strong>{item.nome}</strong>
            {item.categoria && <span className="categoria"> - Categoria: {item.categoria.nome}</span>}
          </li>
          
          ))
        ) : (
          <li>Nenhum item na lista</li>
        )}
      </ul>
    </div>
  );
};

export default ListaCard;
