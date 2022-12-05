import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* { Auth} */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
