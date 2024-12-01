import React, { useState } from 'react';
import api from '../services/api';
import './CadastroCategoria.css';

const CadastroCategoria = () => {
  const [nome, setNome] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await api.post('/categorias', { nome });
      alert('Categoria cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar categoria.');
    }
  };

  return (
    <div className='initial-category'>
      <div className="container-category">
        <div className='box-category'>
          <h1>Adicionar Categoria</h1>
          <form onSubmit={handleCadastro} id="category">
            <input type="text" placeholder="Digite uma categoria" value={nome} onChange={(e) => setNome(e.target.value) } id="writeCategory" />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroCategoria;
