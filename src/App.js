import 'bootstrap/dist/css/bootstrap.min.css';
import { MdShoppingCart } from "react-icons/md";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import AddList from './components/list/AddList';
import NavMenu from './components/NavMenu';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import UserList from './components/user/UserList';

function App() {

  return (
    <Router>
         <div className="App">
        <header className="App-header">
          <div className='title'>
          <MdShoppingCart />
            <h1>
              Lista de compras
            </h1>
          </div>
          <div className='menu'>
            <NavMenu />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path='/lists' element={<AddList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
