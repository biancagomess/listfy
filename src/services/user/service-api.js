
const API_URL = 'http://localhost:5000/users';

export const getUsers = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return [];
    }
};

export const getUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
};

export const addUser = async (user) => {
    try {
        const users = await getUsers();
        const lastId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;

        const newUser = {
            id: lastId + 1,
            name: user.name,
            email: user.email,
            password: user.password
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        return await response.json();
    }catch (error) {
        console.error("Erro aoo adicionar usuário:",error)
        alert("Erro ao adicionar usuário")
    }
};

export const updateUser = async (id, user) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
