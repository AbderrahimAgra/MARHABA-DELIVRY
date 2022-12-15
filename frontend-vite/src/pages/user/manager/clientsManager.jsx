import { React } from "react";
import Input from "../../../components/Input"

function ClientsManager() {
  return (
    <div>
      <div className="p-3 font-bold text-3xl">
        <h1>List Clients</h1>
      </div>

      <div className="overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">Name Complete</th>
              <th scope="col" className="py-2 px-4">Phone</th>
              <th scope="col" className="py-2 px-4">Email</th>
              <th scope="col" className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Abdenacer Sandali
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                <span>+</span>212762401604
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                abdenacer.sandali@gmail.com
              </td>
              <td className="py-4 px-6 flex items-center">
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Abderahman Agra
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                <span>+</span>212612394758
              </td>
              <td className="py-4 px-6 text-gray-600">
                Agra.abderahman@gmail.com
              </td>
              <td className="py-4 px-6 flex items-center">
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 text-gray-600">
                Nainiaa Mehdi
              </td>
              <td className="text-gray-600 py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                <span>+</span>212729386038
              </td>
              <td className="py-4 px-6 text-gray-600">
                nainiaa.mehdi@gmail.com
              </td>
              <td className="py-4 px-6 text-gray-600 flex items-center ">
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClientsManager