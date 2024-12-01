import React, { useEffect, useState } from 'react';
import api from '../services/api';
import "./CadastroItem.css"
import Button from '../components/Button';

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
        <div className='initial'>
            <div className="container">
                <div className='box'>
                    <form onSubmit={handleSubmit} id='itens'>
                        <h1>Adicionar Item</h1>
                        <input type="text" placeholder="Digite o nome item" value={nome} onChange={(e) => setNome(e.target.value)} />
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
                        <button type="submit">Adicionar</button>
                        {/* Preciso verificar a chamada da função no botão e confirmar o forms */}
                        {/* <Button label="Cadastrar" color="primary" size="small" onClick={() => handleSubmit()} /> */}
                    </form>
                </div>
            </div>
        </div>


    );
};

export default CadastroItem;

