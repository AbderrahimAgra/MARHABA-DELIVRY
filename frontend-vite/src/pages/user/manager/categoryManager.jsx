import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import axios from 'axios'

const baseURL = 'http://localhost:5500/api/user/manager'

function categoryManager() {
  const [category, setcategory] = useState([])

  const affichcategory = async() => {
    const datarepas = await axios.get(`${baseURL}/findcategory`)
    
    if(datarepas) {
      setcategory(datarepas.data) 
      console.log(datarepas.data)
    }else{
     console.log("error", err)
    }
   }
   useEffect(() => {
    affichcategory();
  }, [])
  return (
    <div>
      <div className="p-3 font-bold text-3xl">
        <h1>List Category</h1>
      </div>

      <div class="overflow-x-auto drop-shadow-2xl  relative">
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
            {category.map((cate)=>(
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
  )
}

export default categoryManager