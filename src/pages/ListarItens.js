import React, { useState } from 'react';
import api from '../services/api';
import './ListarItens.css';
import Button from '../components/Button';

const ListarItens = () => {
  const [itens, setItens] = useState([]);
  const [listaId, setListaId] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchItens = async () => {
    if (!listaId) {
      alert('Por favor, insira o ID da lista.');
      return;
    }

    setLoading(true);
    try {
      const response = await api.get(`/items/lista/${listaId}`);
      setItens(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      alert('Erro ao buscar itens. Verifique o ID da lista e tente novamente.');
    } finally {
      setLoading(false);
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
      alert('Erro ao atualizar status do item.');
    }
  };

  const handleDeletar = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      setItens((prevItens) => prevItens.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      alert('Erro ao deletar item.');
    }
  };

  return (
    <div className="listar-itens-container">
      <h1>Lista de Itens</h1>

      <div className="input-container">
        <input
          type="number"
          placeholder="Insira o ID da lista"
          value={listaId}
          onChange={(e) => setListaId(e.target.value)}
          size={20}
        />
        <Button label="Buscar Itens" color={'listfybtn'} size="small" onClick={fetchItens} disabled={loading} />
      </div>

      {loading && <p>Carregando itens...</p>}

      {itens.length > 0 ? (
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
              <Button
                label="Deletar"
                color="danger"
                size="small"
                onClick={() => handleDeletar(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Nenhum item encontrado para esta lista.</p>
      )}
    </div>
  );
};

export default ListarItens;
