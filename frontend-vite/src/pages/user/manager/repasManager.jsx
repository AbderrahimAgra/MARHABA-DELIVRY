import { React, useState } from "react"
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Input from "../../../components/Input";
import Button from "../../../components/Button";


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
                <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link>
                <Link to="#" className="text-black text-2xl"><MdDeleteSweep /></Link>
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
          <div className="flex justify-center items-center p-6 drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                  <form className=" text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col gap-6">
                      <div>
                        <Input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Repas" required />
                      </div>
                      <div>
                        <textarea name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" ></textarea>
                      </div>
                      <div>
                        <Input type="file" name="images" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="images" />
                      </div>
                      <div>
                        <select id="categories" name="categories" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-black peer">
                          <option selected>Choose a category</option>
                          <option value="US">Salade</option>
                          <option value="CA">Pizza</option>
                          <option value="FR">Tacos</option>
                          <option value="DE">Sandwich</option>
                        </select>
                      </div>
                      <div>
                        <Input type="number" name="price" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="price" placeholder="Price" />
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




export default repasManager