import React, { useState } from 'react';
import api from '../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', { name, email, password });
      alert('Usuário cadastrado com sucesso!');
      window.location.href = '/'; 
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Cadastrar Usuário</h1>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Register;
