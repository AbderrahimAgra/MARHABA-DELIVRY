import { React, useState, useEffect } from "react";
import Input from "../../../components/Input";
import axios from "axios";


const baseURL = 'http://localhost:5500/api/user/manager'

function ClientsManager() {

  const [clients, setClients] = useState([])

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
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-3 font-bold text-3xl`}>
        <h1>List Clients</h1>
      </div>

      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
  )
}

export default ClientsManager