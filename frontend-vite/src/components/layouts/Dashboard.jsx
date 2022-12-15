import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand, BiAddToQueue } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
<<<<<<< HEAD
import { TbTruckDelivery } from 'react-icons/tb';
=======
>>>>>>> 11fc15fcc78954ff9c74e209bd13b07054cef47f
import Axios from 'axios';

const baseURL = 'http://localhost:5500/api/auth'

function logout() {
  Axios.get(`${baseURL}/logout`)
    .then((res) => {
      if (res.data) {
        localStorage.clear()
      }
    })
    .catch(err =>
      console.log(err)
    )
}


const Dashboard = () => {
  const [open, setOpen] = useState(true)

  // const MenusClient = [
  //   { title: "Dashboad", icon: AiOutlineDashboard, route: '' },
  //   { title: "Salade", icon: GiHotMeal, gap: true, route: '/' },
  //   { title: "Pizza", icon: GiHotMeal, route: '/' },
  //   { title: "Tacos", icon: GiHotMeal, route: '/' },
  //   { title: "Sandwich", icon: GiHotMeal, route: '/' },
  //   { title: "Desserts", icon: GiHotMeal, route: '/' },
  //   { title: "Setting", icon: AiFillSetting, gap: true, route: 'setting' },
  //   { title: "Logout", icon: AiOutlineLogout, route: '/login' },
  // ]

  const MenusManager = [
    { title: "Dashboad", icon: AiOutlineDashboard, route: '' },
    { title: "Repas", icon: GiMeal, gap: true, route: 'repas' },
<<<<<<< HEAD
    { title: "Category", icon: BiCategoryAlt, route: 'category' },
    { title: "Commands", icon: BiCommand, route: 'command' },
    { title: "Livreurs", icon: TbTruckDelivery, route: 'livreurs' },
    { title: "Clients", icon: FiUsers, route: 'clients' },
    { title: "Setting", icon: AiFillSetting, gap: true, route: 'setting' },
    { title: "Logout", icon: AiOutlineLogout, route: '/login' },
=======
    { title: "Category", icon: BiCategoryAlt, route: '/' },
    { title: "Commands", icon: BiCommand, route: '/' },
    { title: "Users", icon: FiUsers, route: '/' },
    { title: "AddLivreur", icon: BiAddToQueue, route: '/' },
    { title: "Setting", icon: AiFillSetting, gap: true, route: 'setting' },
    { title: "Logout", icon: AiOutlineLogout, route: 'login' },
>>>>>>> 11fc15fcc78954ff9c74e209bd13b07054cef47f
  ]
  
  return (
    <div>
      <div className="flex">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 relative px-5 min-h-screen bg-dark`}>
          <img src="../../../public/assets/left-arrow.png"
            className={`bg-white absolute cursor-pointer rounded-full
          -right-3 top-9 w-8 border-4 p-1 border-dark ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center justify-center ">
            <img src="../../../public/assets/logo.png"
              className={`cursor-pointer w-16`}
            />
          </div>
          {/* Menus Client */}
          {/* <ul className="pt-6">
            {MenusClient.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm flex w-11 items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-800 rounded-md ${menu.gap ? "mt-12" : " "}`}>
                <div className="text-white">{React.createElement(menu?.icon, { size: "25" })}</div>
                <Link to={menu.route} onClick={logout}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg text-white`}>{menu.title}</span></Link>
              </li>
            ))}
          </ul> */}

          {/* Menus Manager */}
          <ul className="pt-6">
            {MenusManager.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm flex w-11 items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-800 rounded-md ${menu.gap ? "mt-12" : " "}`}>
                <div className="text-white">{React.createElement(menu?.icon, { size: "25" })}</div>
                <Link to={menu.route} onClick={logout}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg text-white`}>{menu.title}</span></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 px-5 text-2xl font-semibold flex-1 h-screen">
          <nav className="bg-black text-white border-gray-200 px-2 rounded-xl sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="flex items-center">
                <img src="../../../public/assets/logo.png" className="h-6 mr-3 sm:h-9" alt="Marhaba Logo" />
              </a>
              <div class="flex items-center md:order-2">
                <button type="button" class="flex mr-3 text-sm  rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  {/* <h1>Admin</h1> */}
                  <img className="w-10 h-10 rounded-full bg-white" src="../../../public/assets/profil.png" alt="pPofil photo" />
                </button>
              </div>
              <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded  md:text-white md:p-0 dark:text-white" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4  md:p-0 text-white">About</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 md:p-0 text-white">Services</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 md:p-0 text-white">Pricing</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 md:p-0 text-white">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {<Outlet />}

        </div>
      </div>

    </div>
  )
}

export default Dashboard
