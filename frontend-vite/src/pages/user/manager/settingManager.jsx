import { React, useState } from "react"
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle, AiFillSetting, AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai'
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const baseURLLogout = 'http://localhost:5500/api/auth'


function SettingManager() {

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
        
        <form className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-4 pt-9`}>
          <div class="relative z-0 mb-6 w-full group">
            <Input type="text" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" required />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <Input type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" required />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <Input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Email" required />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <Input type="text" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="phone" required />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <Input type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="City" required />
          </div>
          <Button type="submit" class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Submit" />
        </form>
      </div>


    </div>


  )
}

export default SettingManager