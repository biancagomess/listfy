import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ListarItens = () => {
  const [itens, setItens] = useState([]);
  const [listaId, setListaId] = useState(1); 
  
  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await api.get(`/items/lista/${listaId}`);
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };
    fetchItens();
  }, [listaId]);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.categoria.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarItens;
