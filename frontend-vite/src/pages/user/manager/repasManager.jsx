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
      <div className={`${open ? 'ml-72' : ''} m-3`}>
        <button type="button" onClick={() => setShowModal(true)} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ajouter Repas</button>
      </div>

      <div class={` ${open ? 'ml-72' : ''} overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
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
                        <Input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Repas" required />
                      </div>
                      <div className="mb-2">
                        <Input type="text" name="description" id="description" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" required />
                      </div>
                      <div className="mb-2">
                        <Input type="text" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Price" required />
                      </div>
                      <div className="mb-2">
                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option selected>Choose a Category</option>
                          <option value="">Tacos</option>
                          <option value="">Pizza</option>
                          <option value="">Sandwich</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <div class="flex items-center justify-center w-72">
                          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      {/* <Button type="submit" class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Close" onClick={() => setShowModal(false)}  /> */}
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'onClick={() => setShowModal(false)} btn='Close' />
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



    </div >
  )
}




export default repasManager