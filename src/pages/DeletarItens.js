import React from 'react';
import api from '../services/api';

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
        <button onClick={handleDelete}>Deletar Item</button>
    );
};

export default DeleteItem;
