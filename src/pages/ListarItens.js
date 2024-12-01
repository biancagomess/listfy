import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './ListarItens.css';

const ListarItens = () => {
  const [itens, setItens] = useState([]);
  const [listaId, setListaId] = useState(1);

  useEffect(() => {
    fetchItens();
  }, [listaId]);

  const fetchItens = async () => {
    try {
      const response = await api.get(`/items/lista/${listaId}`);
      setItens(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  };

  const handleToggleConcluido = async (id, concluido) => {
    try {
      await api.patch(`/items/${id}`, { concluido });
      setItens((prevItens) =>
        prevItens.map((item) =>
          item.id === id ? { ...item, concluido } : item
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar status do item:', error);
    }
  };

  const handleDeletar = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      setItens((prevItens) => prevItens.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
  };

  return (
    <div className="listar-itens-container">
      <h1>Lista de Itens</h1>
      <ul className="itens-list">
        {itens.map((item) => (
          <li key={item.id} className={item.concluido ? 'concluido' : ''}>
            <label>
              <input
                type="checkbox"
                checked={item.concluido}
                onChange={(e) =>
                  handleToggleConcluido(item.id, e.target.checked)
                }
              />
              <span className={item.concluido ? 'concluido' : ''}>
                {item.nome} - {item.categoria.nome}
              </span>
            </label>
            <button
              className="concluir-btn"
              onClick={() => handleDeletar(item.id)}
                          >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarItens;