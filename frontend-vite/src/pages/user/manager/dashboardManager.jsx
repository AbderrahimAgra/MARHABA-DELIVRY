import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import axios from "axios";

const baseURL = 'http://localhost:5500/api/auth'

function Manager() {

  function logout() {
    axios.get(`${baseURL}/logout`)
      .then((res) => {
        if (res.data) {
          localStorage.clear()
        }
      })
      .catch(err =>
        console.log(err)
      )
  }

  const [open, setOpen] = useState(true)

  const MenusManager = [
    { title: "Dashboad", icon: <AiOutlineDashboard />, route: '' },
    { title: "Repas", icon: <GiMeal />, gap: true, route: 'repas' },
    { title: "Category", icon: <BiCategoryAlt />, route: 'category' },
    { title: "Commands", icon: <BiCommand />, route: 'command' },
    { title: "Livreurs", icon: <TbTruckDelivery />, route: 'livreurs' },
    { title: "Clients", icon: <FiUsers />, route: 'clients' },
    { title: "Setting", icon: <AiFillSetting />, gap: true, route: 'setting' },
    { title: "Logout", icon: <AiOutlineLogout />, route: '/login' },
  ]

  return (
    <div>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 fixed top-0 px-5 min-h-screen  bg-dark`}>
        <img src="../../../../public/assets/left-arrow.png" className={`bg-white absolute cursor-pointer rounded-full -right-3 top-9 w-8 border-4 p-1 border-dark ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className="flex gap-x-4 items-center justify-center ">
          <img src="../../../../public/assets/logo.png" className={`cursor-pointer w-16`} />
        </div>
        <ul className="pt-6">
          {MenusManager.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex w-11 items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-800 rounded-md ${menu.gap ? "mt-12" : " "}`}>
              <div className="text-white text-xl">{menu.icon}</div>
              <Link to={menu.route} onClick={logout}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg text-white`}>{menu.title}</span></Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 px-5 text-2xl font-semibold flex-1 h-screen">
        <nav className={`${open ? 'ml-72' : 'ml-20'} duration-300 bg-black ml-20 text-white border-gray-200 px-2 rounded-xl sm:px-4 py-2.5 dark:bg-gray-900`}>
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <img src="../../../public/assets/logo.png" className="h-6 mr-3 sm:h-9" alt="Marhaba Logo" />
            </a>
            <div class="flex items-center md:order-2">
              <button type="button" class="flex mr-3 text-sm  rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img className="w-10 h-10 rounded-full bg-white" src="../../../public/assets/profil.png" alt="pPofil photo" />
              </button>
            </div>
          </div>
        </nav>

        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 flex justify-center`}>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Repas</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">5</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Categories</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commands</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Users</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
          </div>
        </div>

      </div>


    </div>
  )
}


export default Manager
