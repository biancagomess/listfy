import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ListaCard from './components/ListaCard';
import NavMenu from './components/NavMenu';
import CadastroCategoria from './pages/CadastroCategoria';
import CadastroItem from './pages/CadastroItem';
import CadastroLista from './pages/CadastroLista';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';
import Listas from './pages/Listas';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import ListarItens from './pages/ListarItens';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<><LoginPage /><Footer /></>} />
        <Route path="/" element={<><HomePage /><Footer/></>} />
        <Route path="/dashboard" element={<><NavMenu /><Dashboard /><Footer /></>} />
        <Route path="/listas" element={<><NavMenu /><Listas /><Footer /></>} />
        <Route path="/listas/:id" element={<><NavMenu /><ListaCard /><Footer /></>} />
        <Route path="/cadastro-lista" element={<><NavMenu /><CadastroLista /><Footer /></>} />
        <Route path="/cadastro-item" element={<><NavMenu /><CadastroItem /><Footer /></>} />
        <Route path="/register" element={<><Register /><Footer /></>} />
        <Route path="/itens/:listaId" element={<><NavMenu /><ListarItens /><Footer /></>} />
       {/* <Route path="/categorias" element={<><NavMenu /><Categorias /><Footer /></>} /> */}
        <Route path="/cadastro-categoria" element={<><NavMenu /><CadastroCategoria /><Footer /></>} />
        {/* <Route path="/editar-categoria" element={<><NavMenu /><EditarCategoria /><Footer /></>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
