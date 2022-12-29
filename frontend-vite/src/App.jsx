import { React } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import axios from 'axios'
// Protected Router
// Pages the Auth
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import FormForgotPassword from './pages/auth/FormForgotPassword'
// Pages Client
import Dashboard from './components/layouts/Dashboard';
import DashbordClient from './pages/user/client/dashboardClient'
import SettingClient from './pages/user/client/settingClient'
// Pages Manager
import DashbordManager from './pages/user/manager/dashboardManager'
import RepasManager from './pages/user/manager/repasManager'
import CommandManager from './pages/user/manager/commandManager'
import CategoryManager from './pages/user/manager/categoryManager'
import LivreursManager from './pages/user/manager/LivreursManager'
import ClientsManager from './pages/user/manager/clientsManager'
import SettingManager from './pages/user/manager/settingManager'
// Pages Livreur
import DashbordLivreur from './pages/user/livreur/dashboardLivreur'
import SettingLivreur from './pages/user/livreur/settingLivreur'
import 'react-toastify/dist/ReactToastify.css';
// Page Not Found
// import PageNotFound from './pages/auth/PageNotFound'
// // import PageNotAccess from './pages/auth/PageNotAccess';

window.addEventListener("storage", () => {
  axios
    .get('http://localhost:5500/api/auth/logout')
    .then(() => {
      localStorage.clear();
      window.location.replace('http://127.0.0.1:5173/login');
    })
    .catch(() => {
      console.log("Error");
    });
});

function App() {
  return (
    <Router>
      <Routes>
        {/* { Auth} */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/form-forgot-password/' element={<FormForgotPassword />} />
        {/* { Livreur } */}
        <Route path='/dashboard/livreur' element={<Dashboard />}>
          <Route path='' element={<DashbordLivreur />} />
          <Route path='setting' element={<SettingLivreur />} />
        </Route>
        {/* { Client } */}
        <Route path='/dashboard/client' element={<Dashboard />}>
          <Route path='' element={<DashbordClient />} />
          <Route path='setting' element={<SettingClient />} />
        </Route>
        {/* { Manager } */}
          <Route path='/dashboard/manager' element={<Dashboard />}>
            <Route path='' element={<DashbordManager />} />
            <Route path='repas' element={<RepasManager />} />
            <Route path='category' element={<CategoryManager />} />
            <Route path='command' element={<CommandManager />} />
            <Route path='livreurs' element={<LivreursManager />} />
            <Route path='clients' element={<ClientsManager />} />
            <Route path='setting' element={<SettingManager />} />
          </Route>
      </Routes>
{/* 
      <Route path='/pageNotAccess' element={<PageNotAccess />} /> */}
      {/* <Route path='*' element={<PageNotFound />} /> */}
    </Router>
  );
}

export default App
