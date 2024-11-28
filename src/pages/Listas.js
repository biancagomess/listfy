import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ListaCard from '../components/ListaCard';
import './Listas.css';

const Listas = () => {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    const fetchListas = async () => {
      try {
        const response = await api.get('/listas');
        setListas(response.data);
      } catch (error) {
        console.error('Erro ao buscar listas:', error);
      }
    };

    fetchListas();
  }, []);

  return (
    <div className="listas-container">
      {listas.length > 0 ? (
        listas.map((lista) => <ListaCard key={lista.id} lista={lista} />)
      ) : (
        <p>Nenhuma lista encontrada.</p>
      )}
    </div>
  );
};

export default Listas;
