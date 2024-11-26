import { getUsers } from "../user/service-api";
const API_URL = 'http://localhost:5000/users';


export const loginUser = async (email, password) => {
    try {
      console.log('Buscando usuários...');
      const users = await getUsers();
      console.log('Usuários encontrados:', users);
      
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        console.log('Usuário autenticado com sucesso:', user);
        return user;
      } else {
        console.log('Usuário não encontrado');
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      throw new Error('Erro na autenticação');
    }
  };