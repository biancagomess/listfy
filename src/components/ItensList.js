import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './ItensList.css';

const ItensList = () => {
  const { listaId } = useParams();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await api.get(`/itens/lista/${listaId}`);
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };

    fetchItens();
  }, [listaId]);

  return (
    <div className="itens-list">
      <h2>Itens da Lista {listaId}</h2>
      {itens.length > 0 ? (
        itens.map((item) => (
          <div key={item.id} className="item-card">
            <p>Nome: {item.nome}</p>
            <p>ID: {item.id}</p>
            <p>Concluído: {item.concluido ? 'Sim' : 'Não'}</p>
          </div>
        ))
      ) : (
        <p>Nenhum item encontrado para esta lista.</p>
      )}
    </div>
  );
};

export default ItensList;
