import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../../services/user/service-api';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser(userId);
        if (fetchedUser && fetchedUser.name && fetchedUser.email && fetchedUser.password) {
          setUser(fetchedUser);
        } else {
          setError('Usuário não encontrado');
          setTimeout(() => navigate('/users'), 2000);
        }
      } catch (err) {
        console.error('Erro ao carregar o usuário', err);
        setError('Erro ao carregar o usuário');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    } else {
      setError('ID de usuário inválido');
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userId, user);
      navigate('/users')
    } catch (err) {
      setError('Erro so atualizar')
    }
  };


  if (loading) {
    return <div className="spinner-border text-muted"></div>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className="mt-4 mb-5">Editar Usuário</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center d-flex justify-content-center flex-column ">
          <Col sm={3} className="my-5">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="nome"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required />
          </Col>
          <Col xs={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
              Email
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Col>

          <Col xs={3} className="my-5">
            <Form.Label column sm="2" visuallyHidden>
              Password
            </Form.Label>
            <InputGroup>
              <Col sm="12">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="inlineFormInputGroupPassword"
                  value={user.password}
                  onChange={handleChange}
                  required />
              </Col>
            </InputGroup>
          </Col>

          <Col xs="auto" className="my-5">
            <Button type="submit" disabled={loading} className='btn-collor'>Atualizar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditUser;