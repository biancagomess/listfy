import React, { useEffect, useState } from 'react';
import api from '../services/api';
import "./ListarCategorias.css";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [listaId, setListaId] = useState(1);

  useEffect(() => {
    fetchCategorias();
  }, [listaId]);

  const fetchCategorias = async () => {
    try {
      const response = await api.get(`/categorias`);
      setCategorias(response.data);
    } catch (error) {
      console.error('Erro ao buscar as categorias:', error);
    }
  };

  const handleDeletar = async (id) => {
    try {
      await api.delete(`/categorias/${id}`);
      setCategorias((prevCategoria) => prevCategoria.filter((categoria) => categoria.id !== id));
    } catch (error) {
      console.error('Erro ao deletar esta categoria:', error);
    }
  };

  return (
    <div className="listar-categorias-container">
      <h1>Lista de categorias</h1>
      <ul className="catergoria-list">
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <label>
              <span>
                {categoria.nome}
              </span>
            </label>
            <button
              className="concluir-btn"
              onClick={() => handleDeletar(categoria.id)}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarCategorias;