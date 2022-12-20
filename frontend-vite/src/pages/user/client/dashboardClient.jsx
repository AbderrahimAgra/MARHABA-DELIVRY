import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';
import axios from "axios";

const baseURL = 'http://localhost:5500/api/auth'


function Client() {

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

  const MenusClient = [
    { title: "Dashboad", icon: <AiOutlineDashboard />, route: '/dashboard/client' },
    { title: "Salade", icon: <GiHotMeal />, gap: true, route: '/' },
    { title: "Pizza", icon: <GiHotMeal />, route: '/' },
    { title: "Tacos", icon: <GiHotMeal />, route: '/' },
    { title: "Sandwich", icon: <GiHotMeal />, route: '/' },
    { title: "Desserts", icon: <GiHotMeal />, route: '/' },
    { title: "Setting", icon: <AiFillSetting />, gap: true, route: '/dashboard/client/setting' },
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
          {MenusClient.map((menu, index) => (
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
              <div>
                <BsFillCartCheckFill className='mr-2' />
              </div>
              <button type="button" class="flex mr-3 text-sm  rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img className="w-10 h-10 rounded-full bg-white" src="../../../public/assets/profil.png" alt="Pofil photo" />
              </button>
            </div>
          </div>
        </nav>

        <div className={`${open ? 'ml-72' : 'ml-20'} mb-4 duration-200 flex flex-wrap justify-center`}>
          <div className="w-80  max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg" src="../../../../public/assets/plat2.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
          <div className="w-80 max-w-sm mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4 drop-shadow-2xl mr-6">
            <img className="p-8 rounded-t-lg" src="../../../../public/assets/plat3.png" alt="product image" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
              <p className="text-sm font-normal">This is plat is perfect </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">$10</span>
                <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Client
