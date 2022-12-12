import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Dashboad", src: "dashboard", route: '' },
    { title: "Salade", src: "salade", gap: true , route:'/' },
    { title: "Pizza", src: "pizza" , route:'/' },
    { title: "Tacos", src: "tacos" , route:'/' },
    { title: "Sandwich", src: "sandwich" , route:'/' },
    { title: "Desserts", src: "dessert" , route:'/' },
    { title: "Setting", src: "setting", gap: true , route:'setting' },
    { title: "Logout", src: "logout" , route:'logout' },
  ]
  return (
    <div>
      <div className="flex  ">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-dark relative`}>
          <img src="../../../public/assets/left-arrow.png"
            className={`bg-white absolute cursor-pointer rounded-full
          -right-3 top-9 w-8 border-4 p-1 border-dark ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center justify-center ">
            <img src="../../../public/assets/logo.png"
              className={`cursor-pointer w-16 
            // ${open && "rotate-[360deg]"}`}
            />
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm flex w-11 items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-800 rounded-md ${menu.gap ? "mt-12" : " "}`}>
                <img src={`../../../public/assets/${menu.src}.png`} className="w-8" />
                <Link to={menu.route}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg`}>{menu.title}</span></Link>
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
