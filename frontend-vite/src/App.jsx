import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Client from './pages/user/Client'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* { Auth} */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* { User } */}
        <Route path='/client' element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
