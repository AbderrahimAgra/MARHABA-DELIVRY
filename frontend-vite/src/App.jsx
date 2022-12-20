import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import ProtectedRoutes from './ProtectedRoutes';
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
// import DashbordLivreur from './pages/user/livreur/dashboardLivreur'

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
    <BrowserRouter>
      <Routes>
        {/* { Auth} */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/form-forgot-password/' element={<FormForgotPassword />} />
        {/* { Client } */}
        {/* <Route element={<ProtectedRoutes />}> */}
        {/* <Route path='/dashboard/client' element={<Dashboard />}> */}
            <Route path='/dashboard/client' element={<DashbordClient />} />
            <Route path='/dashboard/client/setting' element={<SettingClient />} />
          {/* </Route> */}
        {/* </Route> */}
        {/* { Manager } */}
        <Route path='/dashboard/manager' element={<DashbordManager />} />
        <Route path='/dashboard/manager/repas' element={<RepasManager />} />
        <Route path='/dashboard/manager/category' element={<CategoryManager />} />
        <Route path='/dashboard/manager/command' element={<CommandManager />} />
        <Route path='/dashboard/manager/livreurs' element={<LivreursManager />} />
        <Route path='/dashboard/manager/clients' element={<ClientsManager />} />
        <Route path='/dashboard/manager/setting' element={<SettingManager />} /> 
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
