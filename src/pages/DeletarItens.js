import React from 'react';
import api from '../services/api';
import Button from '../components/Button';

const DeleteItem = ({ itemId }) => {
    const handleDelete = async () => {
        try {
            await api.delete(`/items/${itemId}`);
            alert('Item deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar item:', error);
            alert('Erro ao deletar item.');
        }
    };

    return (
       
        <Button label="Deletar item" color="danger" size="small" onClick={() => onClick={handleDelete}} />
    );
};

export default DeleteItem;
