import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
// Pages the Auth
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import FormForgotPassword from './pages/auth/FormForgotPassword'
// Pages Client
import Dashboard from './components/layouts/Dashboard';
import DashbordClient from './pages/user/client/dashboardClient'
import SettingClient from './pages/user/client/settingClient'
import DashbordManager from './pages/user/manager/dashboardManager'
// import DashbordLivreur from './pages/user/livreur/dashboardLivreur'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* { Auth} */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/form-forgot-password/:token' element={<FormForgotPassword />} />
        {/* { Client } */}
        <Route path='/dashboard/client' element={<Dashboard />}>
          <Route path='' element={<DashbordClient />} />
          <Route path='setting' element={<SettingClient />} />
        </Route>
        {/* { Manager } */}
        <Route path='/dashboard/manager' element={<Dashboard />}>
          <Route path='' element={<DashbordManager/>} />
          {/* <Route path='setting' element={<SettingManager />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
