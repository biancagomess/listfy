import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Listas from './Listas'; 

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        setUser(token);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="dashboard-container"> 
      <h1 id='dash1'>Bem-vindo ao Listfy</h1>
      <h3>Usuário:</h3>
      {user && <div className="user-info"> {user.name}</div>}

      <h2>Suas Listas:</h2>
      <Listas /> 
    </div>
  );
};

export default Dashboard;
