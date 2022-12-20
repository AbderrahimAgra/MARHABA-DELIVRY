import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineDashboard, AiFillSetting, AiOutlineLogout, AiOutlineCloseCircle } from 'react-icons/ai';
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import axios from 'axios'

const baseURL = 'http://localhost:5500/api/user/manager'
const baseURLLogout = 'http://localhost:5500/api/auth'

function categoryManager() {

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
  const [showModal, setShowModal] = useState(false)
  const [category, setcategory] = useState([])
  

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

  const affichcategory = async () => {
    const datarepas = await axios.get(`${baseURL}/findcategory`)

    if (datarepas) {
      setcategory(datarepas.data)
      console.log(datarepas.data)
    } else {
      console.log("error", err)
    }
   }

  
  useEffect(() => {
    affichcategory();
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

        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
          <Button type="button" onclick={() => setShowModal(true)} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" btn="Ajouter Category" />
        </div>

        <div class={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto drop-shadow-2xl  relative`}>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 text-sm flex justify-center">
                  Name Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category.map((cate) => (
                <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-4 px-6 text-center text-gray-600 ">
                    {cate.name}
                  </td>
                  <td className="py-4 px-6 flex items-center">
                    <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link>
                    <Link to="#" className="text-black text-3xl"><MdDeleteSweep /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un Repas
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Category" required />
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onClick={() => setShowModal(false)} btn='Close' />
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Create Repas' />
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null
      }
    </div>
  )
}

export default categoryManager