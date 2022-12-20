import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiFillSetting, AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai'
import { GiMeal } from 'react-icons/gi';
import { BiCategoryAlt, BiCommand } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from 'axios'

const baseURL = 'http://localhost:5500/api/user/manager'
const baseURLLogout = 'http://localhost:5500/api/auth'

function livreursManager() {

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
  const [livreurs, setLivreurs] = useState([])

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

  const fetchLivreurs = async () => {
    const dataLivreurs = await axios.get(`${baseURL}/listlivreur`)
    if (dataLivreurs) {
      setLivreurs(dataLivreurs.data)
    } else {
      console.log("error", err)
    }
  }


  useEffect(() => {
    fetchLivreurs()
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
          <Button type='button' onclick={() => setShowModal(true)} class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Ajouter un Livreur' />
        </div>


        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
          <table className={` w-full text-sm text-left text-gray-500 dark:text-gray-400`}>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="py-2 px-4">Name Complete</th>
                <th scope="col" className="py-2 px-4">Phone</th>
                <th scope="col" className="py-2 px-4">Email</th>
                <th scope="col" className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {livreurs.map((livreur, index) => {
                console.log(livreur);
                return (
                  <tr key={index} className={`bg-white border-b text-center dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      {livreur.first_name} {livreur.last_name}
                    </td>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      <span>+</span>{livreur.phone}
                    </td>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                      {livreur.email}
                    </td>
                    <td className="py-4 px-6 items-center">
                      <Input type="checkbox" checked={Boolean(livreur.isBanned)} id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center p-6 drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un Livreurs
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className=" text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col gap-6">
                      <div>
                        <Input type="text" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" />
                      </div>
                      <div>
                        <Input type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" />
                      </div>
                      <div>
                        <Input type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="email" placeholder="Email" />
                      </div>
                      <div>
                        <Input type="password" name="password" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="password" placeholder="Password" />
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" type="button" onclick={() => setShowModal(false)} btn="Close" />
                      <Button btn="Ajouter" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default livreursManager