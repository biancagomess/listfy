import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CadastroItem = () => {
    const [nome, setNome] = useState('');
    const [listaId, setListaId] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [listas, setListas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
    
                try {
                const responseListas = await api.get('/listas');
                const responseCategorias = await api.get('/categorias');
                setListas(responseListas.data);
                setCategorias(responseCategorias.data);
            } catch (error) {
                console.error('Erro ao carregar listas ou categorias:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const itemData = {
                nome,
                concluido: false,
                lista: { id: listaId },
                categoria: { id: categoriaId },
            };
            await api.post('/items', itemData);
            alert('Item cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar item:', error);
            alert('Erro ao cadastrar item.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastrar Item</h1>
            <input type="text" placeholder="Nome do item" value={nome} onChange={(e) => setNome(e.target.value)} />
            <select value={listaId} onChange={(e) => setListaId(e.target.value)}>
                <option value="">Selecione uma lista</option>
                {listas.map((lista) => (
                    <option key={lista.id} value={lista.id}>{lista.nome}</option>
                ))}
            </select>
            <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                ))}
            </select>
            <button type="submit">Cadastrar</button>
        </form>

    );
};

export default CadastroItem;

