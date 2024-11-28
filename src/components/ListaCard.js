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
    </div>
  );
};

export default ListaCard;
