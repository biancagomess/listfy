import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Button from '../components/Button';


const ListarUsers = () => {
  const [users, setUsers] = useState([]);
  const [listaId, setListaId] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [listaId]);

  const fetchUsers = async () => {
    try {
      const response = await api.get(`/users/1`);
      setUsers(response.data);
        } catch (error) {
      console.error('Erro ao buscar as users:', error);
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  

  const handleDeletar = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Erro ao deletar este user:', error);
    }
  };

  return (
    <div className="listar-users-container">
      <h1>Lista de users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <label>
              <span>
                {user.nome}
              </span>
            </label>
            <Button label="Deletar" color="danger" size="small" onClick={() => handleDeletar(user.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarUsers;