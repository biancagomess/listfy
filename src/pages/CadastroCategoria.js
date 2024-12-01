import React, { useState } from 'react';
import api from '../services/api';

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
    <>
      <h1>Cadastrar Categoria</h1>
      <form onSubmit={handleCadastro}>
        <input type="text" placeholder="Nome da categoria" value={nome} onChange={(e) => setNome(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default CadastroCategoria;
