import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLists } from '../services/list/service-api-list'
const Home = () => {
  const [user, setUser] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
    
    if (currentUser) {
      const fetchLists = async () => {
        const allLists = await getLists();  
        const userLists = allLists.filter(list => list.userId === currentUser.id);  
        setLists(userLists);
      };

      fetchLists();
    }
  }, []);

  return (
    <div>
      <h2>Listas de Compras</h2>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}</p>
          <Link to="/add-list">Criar Nova Lista</Link>

          <ul>
            {lists.map((list) => (
              <li key={list.id}>
                <Link to={`/edit-list/${list.id}`}>{list.nome}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Por favor, faça login para ver suas listas.</p>
      )}
    </div>
  );
};

export default Home;
