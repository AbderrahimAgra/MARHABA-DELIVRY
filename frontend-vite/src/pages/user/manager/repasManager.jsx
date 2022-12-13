import { React, useState } from "react"
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// import Input from "../../../components/Input";
// import Button from "../../../components/Button";


function repasManager() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="m-3">
        <button type="button" onClick={() => setShowModal(true)} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ajouter Repas</button>
      </div>
      <div class="overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">Name</th>
              <th scope="col" class="py-3 px-6">Description</th>
              <th scope="col" class="py-3 px-6">image</th>
              <th scope="col" class="py-3 px-6">Category</th>
              <th scope="col" class="py-3 px-6">Price</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">
                Sliver
              </td>
              <td class="py-4 px-6">
                Sliver
              </td>
              <td class="py-4 px-6">
                Laptop
              </td>
              <td class="py-4 px-6">
                $2999
              </td>
              <td class="py-4 px-6 flex text-right">
                {/* <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link>
                <Link to="#" className="text-black text-2xl"><MdDeleteSweep /></Link> */}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-6">
                White
              </td>
              <td class="py-4 px-6">
                Laptop PC
              </td>
              <td class="py-4 px-6">
                Laptop PC
              </td>
              <td class="py-4 px-6">
                $1999
              </td>
              <td class="py-4 px-6 flex text-right">
                <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link>
                <Link to="#" className="text-black text-2xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="py-4 px-6">
                Black
              </td>
              <td class="py-4 px-6">
                Accessories
              </td>
              <td class="py-4 px-6">
                Accessories
              </td>
              <td class="py-4 px-6">
                $99
              </td>
              <td class="py-4 px-6 flex text-right">
                <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link>
                <Link to="#" className="text-black text-2xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
          </tbody>
        </table>
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
                    Ajouter un nouveau Livreur
                  </h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-gray-300 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    className="my-4 text-slate-500 text-lg leading-relaxed"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col">
                      <div>
                        <label htmlFor="prenom" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Prenom
                          </span>
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          name="prenom"
                          id="prenom"
                          placeholder="Inserer le prenom"
                          className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          placeholder="Inserer l'email"
                          className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      // onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>

        </>
      ) : null}



    </div>
  )
}




export default repasManager