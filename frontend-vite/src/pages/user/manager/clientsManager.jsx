import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillSetting, AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai'
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import Input from "../../../components/Input";
import axios from "axios";


const baseURL = 'http://localhost:5500/api/user/manager'
const baseURLLogout = 'http://localhost:5500/api/auth'

function ClientsManager() {

  function logout() {
    axios.get(`${baseURLLogout}/logout`)
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
  const [clients, setClients] = useState([])

  const MenusManager = [
    { title: "Dashboad", icon: <AiOutlineDashboard />, route: '/dashboard/manager' },
    { title: "Repas", icon: <GiMeal />, gap: true, route: '/dashboard/manager/repas' },
    { title: "Category", icon: <BiCategoryAlt />, route: '/dashboard/manager/category' },
    { title: "Commands", icon: <BiCommand />, route: '/dashboard/manager/command' },
    { title: "Livreurs", icon: <TbTruckDelivery />, route: '/dashboard/manager/livreurs' },
    { title: "Clients", icon: <FiUsers />, route: '/dashboard/manager/clients' },
    { title: "Setting", icon: <AiFillSetting />, gap: true, route: '/dashboard/manager/setting' },
    { title: "Logout", icon: <AiOutlineLogout />, route: '/login' },
  ]

  const affichageclient = async () => {
    const dataclient = await axios.get(`${baseURL}/listclient`)

    if (dataclient) {
      setClients(dataclient.data)
      console.log(dataclient.data)
    } else {
      console.log("error", err)
    }
  }
  useEffect(() => {
    affichageclient()
  }, [])

  return (
    <div>
      <div className={`${open ? 'w-72' : 'w-20'} fixed top-0 duration-300 px-5 min-h-screen  bg-dark`}>
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

        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-3 font-bold text-3xl`}>
          <h1>List Clients</h1>
        </div>

        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-2 px-4">Name Complete</th>
                <th scope="col" className="py-2 px-4">Phone</th>
                <th scope="col" className="py-2 px-4">Email</th>
                <th scope="col" className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => {
                return (
                  <tr key={index} className="bg-white border-b text-center dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      {client.first_name} {client.last_name}
                    </td>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      <span>+</span>{client.phone}
                    </td>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      {client.email}
                    </td>
                    <td className="py-4 px-6 items-center">
                      <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default ClientsManager