import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../services/user/service-api';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    await addUser(newUser);
    navigate('/users');
  };

  return (
    <div>
      <h2 className="mt-5 mb-5">Adicionar Novo Usuário</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center d-flex justify-content-center">

          <Col sm={3} className="my-5">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="nome" type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </Col>


          <Col xs={3} className="my-5">
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
              Email
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Col>

          <Col xs={3} className="my-5">
            <Form.Label column sm="2" visuallyHidden>
              Password
            </Form.Label>
            <InputGroup>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" id="inlineFormInputGroupPassword" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </Col>
            </InputGroup>
          </Col>

          <Col xs="auto" className="my-5">
            <Button type="submit" className='btn-collor'>Cadastrar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddUser;