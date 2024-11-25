import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';  


const NavMenu = () => {
  const navItems = [
    { label: 'Usuários', href: '/users' },
    { label: 'Adicionar Usuário', href: '/add-user' },
    { label: 'Minhas Listas', href: '/lists' },
    { label: 'Minha Conta', href: '/minha-conta' }
  ];

  return (
    <Nav defaultActiveKey="/home" className="d-flex justify-content-center align-items-start">
      <Nav.Item>
        <Link to="/" className="text-decoration-none text-white">
          <FaListCheck className="me-2" />
          Listify
        </Link>
      </Nav.Item>

      {navItems.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link href={item.href} className='text-white'>{item.label}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavMenu;