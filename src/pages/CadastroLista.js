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
    <div className="cadastro-lista">
      <h2>Cadastrar Lista</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Lista:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroLista;
