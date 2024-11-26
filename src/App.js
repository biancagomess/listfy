import 'bootstrap/dist/css/bootstrap.min.css';
import { MdShoppingCart } from "react-icons/md";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from '../src/components/login/ProtectedRoute'; 
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import AddList from './components/list/AddList';
import Login from './components/login/Login';
import NavMenu from './components/NavMenu';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import UserList from './components/user/UserList';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (
    <AuthProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/home" element={<ProtectedRoute component={Home} />} />
              <Route path="/add-list" element={<ProtectedRoute component={AddList} />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/edit-user/:userId" element={<EditUser />} />
            </Routes>
            <Footer />
          </div>
       
      </Router>
    </AuthProvider>
  );
}

export default App;
