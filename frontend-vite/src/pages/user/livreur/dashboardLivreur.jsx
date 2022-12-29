import { React, useState, useEffect } from "react"
import Button from "../../../components/Button"
import { FiEdit } from 'react-icons/fi'
import axios from 'axios'

function Livreur() {

  const baseURL = 'http://localhost:5500/api/user/livreur'

  const [commands, setCommands] = useState([])
  const [status, setStatus] = useState([])
  const [edit, setEdit] = useState(false)
  const [idCommand, setIdCommand] = useState({id: ''})
  const [updateStatusOrder, setUpdateStatusOrder] = useState({status: ''})

  const onChangeStatus = async(e) => {
    const valeur = e.target.value
    setUpdateStatusOrder({ ...updateStatusOrder, [e.target.name]: valeur})
  }

  const getCommand = async () => {
    await axios.get(`${baseURL}/command`)
      .then(res => {
        setCommands(res.data)
      })
      .catch(err => console.log(err))
  }

  const getStatus = async () => {
    await axios.get(`${baseURL}/status`)
      .then(res => {
        setStatus(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateStatus = async () => {
    await axios.put(`${baseURL}/update-status/${idCommand}`, {status: updateStatusOrder.status})
    .then(res => {
      console.log(res.data)
      window.location.reload(false)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getCommand()
    getStatus()
  }, [])

  return (
    <div className={`${open ? 'ml-72' : 'ml-20'}`}>
      <div className={` duration-300 p-3 font-bold text-3xl`}>
        <h1>List Command</h1>
      </div>

      {
        edit ?
          <form className={` duration-300 p-4 pt-9`}>
            <div className="mb-2 relative z-0 w-full group">
              <select name='status' onChange={onChangeStatus} id="status" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a Status</option>
                {status.map((statu, index) => (
                  <option key={index} value={statu._id}>{statu.name}</option>
                ))}
              </select>
            </div>
            <Button type="submit" onclick={() => setEdit(false)} class="text-white bg-black mr-3 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="submit" onclick={updateStatus} class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Update" />
          </form>
          : null
      }

      <div className={`duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">Repas</th>
              <th scope="col" className="py-2 px-4">Quantity</th>
              <th scope="col" className="py-2 px-4">Status</th>
              <th scope="col" className="py-2 px-4">Client</th>
              <th scope="col" className="py-2 px-4">Total Price</th>
              <th scope="col" className="py-2 px-4">Address</th>
              <th scope="col" className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {
              commands.map((command, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    Tacos
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    2
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {command.status.name}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {command.client.first_name} {command.client.last_name}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {command.totalPrice} <span>DH</span>
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {command.address}
                  </td>
                  <td className="py-4 px-6 flex items-center">
                    <button className="text-black text-xl mr-2" onClick={() => (setEdit(true), setIdCommand(command._id))} ><FiEdit /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Livreur