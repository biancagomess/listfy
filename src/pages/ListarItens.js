import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import './ListarItens.css';

const ListarItens = () => {
  const { listaId } = useParams(); // Obtém o ID da lista pela URL
  const [itens, setItens] = useState([]);

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

  const marcarComoConcluido = async (itemId) => {
    try {
      await api.put(`/items/${itemId}`, { concluido: true });
      setItens(itens.map((item) =>
        item.id === itemId ? { ...item, concluido: true } : item
      ));
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  return (
    <div className="listar-itens-container">
      <h1>Itens da Lista</h1>
      {itens.length > 0 ? (
        <ul className="itens-list">
          {itens.map((item) => (
            <li key={item.id} className={item.concluido ? 'concluido' : ''}>
              <span>{item.nome} - {item.categoria.nome}</span>
              {!item.concluido && (
                <button
                  onClick={() => marcarComoConcluido(item.id)}
                  className="concluir-btn"
                >
                  Marcar como comprado
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item encontrado.</p>
      )}
    </div>
  );
};

export default ListarItens;

