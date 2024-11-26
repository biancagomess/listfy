import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getList, updateList } from '../../services/list/service-api-list';  
import { getCategories } from '../../services/category/service-api-category';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const EditList = () => {
  const { id } = useParams();
  const [listName, setListName] = useState('');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const list = await getList(id);
      setListName(list.nome);
      setItems(list.itens);
      const categoriesFromServer = await getCategories();
      setCategories(categoriesFromServer);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedList = { listName, items };
    await updateList(id, updatedList);  
    navigate('/home');
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <div>
      <h2>Editar Lista</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col sm={3}>
            <Form.Label>Nome da Lista</Form.Label>
            <Form.Control
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          </Col>
        </Row>

        {items.map((item, index) => (
          <Row key={index} className="my-3">
            <Col sm={3}>
              <Form.Control
                type="text"
                value={item.nome}
                onChange={(e) => handleItemChange(index, 'nome', e.target.value)}
                placeholder="Nome do Item"
              />
            </Col>
            <Col sm={2}>
              <Form.Control
                type="number"
                value={item.quantidade}
                onChange={(e) => handleItemChange(index, 'quantidade', e.target.value)}
                placeholder="Quantidade"
              />
            </Col>
            <Col sm={3}>
              <Form.Select
                value={item.categoria}
                onChange={(e) => handleItemChange(index, 'categoria', e.target.value)}
              >
                <option value="">Selecione a Categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nome}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        ))}

        <Button type="submit">Atualizar Lista</Button>
      </Form>
    </div>
  );
};

export default EditList;
