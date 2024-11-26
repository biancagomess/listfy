import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsPersonSquare } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/user/service-api';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    const handleEditClick = (userId) => {
        navigate(`/edit-user/${userId}`);
    };

    return (
        <div className="d-flex justify-content-around flex-column ">
            <div>
                <h2 className="mt-5 mb-5">Lista de Usuários</h2>
            </div>

            <div className="d-flex justify-content-evenly">
                
                {users.map((user) => (
                    <Card key={user.id} style={{ width: '18rem' }}>
                        <BsPersonSquare />
                        <Card.Body>
                            <Card.Title> Nome: {user.name} </Card.Title>
                            <Card.Text>
                                E-mail: {user.email}
                            </Card.Text>
                            <Button onClick={() => handleEditClick(user.id)} className="btn-collor">Editar</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UserList;