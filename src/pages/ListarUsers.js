import React, { useState, useEffect } from 'react';
import './ListarUsers.css';

const ListarUsers = () => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = JSON.parse(localStorage.getItem('token')); 
      if (token) {
        
        setUser({ ...token, password: '' });
      }
    };

    fetchUser();
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="user-profile">
      {user ? (
        <div className="profile-details">
          <h2>Perfil do Usuário</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
          {/* Verificar depois a possibilidade de incluir a funcionalidade de mostrar a senha e editar */}
          {/* <p>
            <strong>Senha:</strong>{' '}
            {showPassword ? user.password : '********'}
            <button onClick={handleTogglePassword} className="toggle-password">
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </p> */}
        </div>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
};

export default ListarUsers;
