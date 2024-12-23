import React, { useState } from 'react';
import api from '../services/api';
import './CadastroLista.css';


const CadastroLista = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/listas', { nome });
      alert('Lista criada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao criar lista:', error);
      alert('Erro ao criar lista. Tente novamente.');
    }
  };

  return (
    <div className='initial'>
      <div className="container">
        <div className='box'>
          <h2>Adicionar Lista</h2>
          <form onSubmit={handleSubmit} id="grocery">

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              id="writelist"
              placeholder="Digite o nome da Lista"
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroLista;
