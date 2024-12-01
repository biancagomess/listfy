import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="body">
      <div className="register-container">
        <form onSubmit={handleRegister}>
          <h1>Cadastrar Usuário</h1>
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="button-group">
            <button type="submit">Cadastrar</button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
