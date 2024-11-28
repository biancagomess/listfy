import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.get(`/users/email/${email}`);
            if (response.data) {
                localStorage.setItem('token', JSON.stringify(response.data));
                navigate('/listas');
            } else {
                alert('Email não encontrado!');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao realizar login. Verifique suas credenciais.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
