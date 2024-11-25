import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { getCategories } from '../../services/category/service-api-category';
import { createList, getList } from '../../services/list/service-api-list';
import Alert from 'react-bootstrap/Alert';

const AddList = () => {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [categories, setCategories] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState(null);


  useEffect(() => {
    const loadCategories = async () => {
      const categoriesFromServer = await getCategories();
      setCategories(categoriesFromServer);
    };

    loadCategories();
  }, []);


  const addItem = () => {
    if (newItemName && newItemCategory) {
      const newItem = {
        nome: newItemName,
        categoria: newItemCategory,
        quantidade: newItemQuantity,
      };
      setItems([...items, newItem]);
      setNewItemName("");
      setNewItemCategory("");
      setNewItemQuantity(1);
    } else {
      alert("Por favor, preencha todos os campos do item.");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

      const newList = {
      listName, items
    };

    if (items.length === 0) {
      setAlertMessage('A lista precisa ter pelo menos um item.');
      setAlertVariant('danger');
      return;
    }

    const response = await createList(newList);

    if (response) {
      setAlertMessage('Lista cadastrada com sucesso!');
      setAlertVariant('success');
      setListName("");
      setItems([]);
    } else {
      setAlertMessage('Ocorreu um erro ao cadastrar a lista.');
      setAlertVariant('danger');

    }
  };

  return (
    <div>
      <h2>Criar Nova Lista de Compras</h2>
      {alertMessage && (
        <Alert variant={alertVariant}>
          {alertMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center d-flex justify-content-center">
          <Col sm={3} className="my-5">
            <Form.Label htmlFor="inlineFormInputName" className="d-flex fw-bold">
              Adicionar o nome da Lista:
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Digite o nome da lista"
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              required
            />
          </Col>
        </Row>

        <Row className="align-items-center d-flex justify-content-center">
          <Col xs={3} className="my-2">
            <Form.Label htmlFor="inlineFormInputGroupUsername" className="d-flex fw-bold">
              Adicionar Itens:
            </Form.Label>
            <InputGroup>
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="Digite o nome do item"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                required
              />
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="Quantidade"
                type="number"
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(Number(e.target.value))}
                required
              />
              <Form.Select
                value={newItemCategory}
                onChange={(e) => setNewItemCategory(e.target.value)}
                required
              >
                <option value="">Selecione a Categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nome}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
            <Col xs="auto" className="my-5">
              <Button type="button" onClick={addItem} className='btn-collor'>Cadastrar</Button>
            </Col>
          </Col>
        </Row>

        <Row className="align-items-center d-flex justify-content-center">
          <Col xs={3} className="my-5">
            <ListGroup as="ol" numbered xs="auto">
              {items.map((item, index) => (
                <ListGroup.Item key={index} as="li" className="d-flex justify-content-center align-items-start">
                  {item.nome} - {item.quantidade} - {categories.find(cat => cat.id === item.categoria)?.nome || "Categoria não encontrada"}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        <Col xs="auto" className="my-5">
          <Button type="submit" className='btn-collor'>Criar Lista</Button>
        </Col>
      </Form>
    </div>
  );
};

export default AddList;
