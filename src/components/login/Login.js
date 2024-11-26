import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();  
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (email === 'user@example.com' && password === 'password') {
      login({ email });  
      // history.push('/home');  
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
