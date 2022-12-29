import { React, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import Button from "../../../components/Button";
import axios from 'axios'

const baseURL = 'http://localhost:5500/api/user/manager'

const CommandManager = () => {

  const [commands, setCommands] = useState([])
  const [status, setStatus] = useState({})
  const [getLivreur, setGetLivreur] = useState({})
  const [edit, setEdit] = useState(false)
  const [updateLivreur, setUpdateLivreur] = useState({ livreur: '' })
  const [updateStatus, setUpdateStatus] = useState({ status: '' })
  const [idCommand, setIdCommand] = useState({ id: '' })

  const onChangeStatus = (e) => {
    const valeur = e.target.value
    setUpdateStatus({ ...updateStatus, [e.target.name]: valeur })
  }

  const onChangeLivreur = (e) => {
    const valeur = e.target.value
    setUpdateLivreur({ ...updateLivreur, [e.target.name]: valeur })
  }

  const affichageCommand = async () => {
    await axios.get(`${baseURL}/commands`)
      .then(res => {
        setCommands(res.data)
      })
      .catch(err => console.log(err))
  }

  const affichageStatus = async () => {
    await axios.get(`${baseURL}/getStatus`)
      .then(res => {
        setStatus(res.data)
      })
      .catch(err => console.log('Error', err))
  }

  const listlivreur = async () => {
    axios.get(`${baseURL}/listlivreur`)
      .then(res => {
        setGetLivreur(res.data)
        // console.log(res.data)
      })
      .catch(err => console.log("Error", err))
  }

  const updateStatusCommand = async() => {
    await axios.put(`${baseURL}/update-Status-Command/${idCommand}`, {status: updateStatus.status})
    .then(res => {
      console.log(res.data)
      window.location.reload(false)
    })
    .catch(err => console.log(err))
  }

  const updateLivreurCommand = async () => {
    await axios.put(`${baseURL}/update-Livreur-Command/${idCommand}`, { livreur: updateLivreur.livreur })
      .then(res => {
        console.log(res.data)
        window.location.reload(false)
      })
      .catch(err => {
        console.log(err.res.data)
      })
  }

  const OnclickBtn = () => {
    updateStatusCommand()
    updateLivreurCommand()
  }


  useEffect(() => {
    listlivreur(),
      affichageStatus(),
      affichageCommand()
  }, [])


  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-3 font-bold text-3xl`}>
        <h1>List Command</h1>
      </div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">Repas</th>
              <th scope="col" className="py-2 px-4">Quantity</th>
              <th scope="col" className="py-2 px-4">Status</th>
              <th scope="col" className="py-2 px-4">Client</th>
              <th scope="col" className="py-2 px-4">Total Price</th>
              <th scope="col" className="py-2 px-4">Livreur</th>
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
                    {`${command.livereur.length > 0 ? command.livereur[0].first_name + " " + command.livereur[0].last_name : '---'}`}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {command.address}
                  </td>
                  <td className="py-4 px-6 flex items-center">
                    <Link to="#" className="text-black text-xl mr-2" onClick={() => (setEdit(true), setIdCommand(command._id))}><FiEdit /></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {edit ? (
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
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setEdit(false)} >
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
                        <select name='status' onChange={onChangeStatus} id="status" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option selected>Choose a Status</option>
                          {status.map((statu, index) => (
                            <option key={index} value={statu._id}>{statu.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-2">
                        <select id="livreur" name="livreur" onChange={onChangeLivreur} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option selected>Choose a Livreur</option>
                          {getLivreur.map((livreur) => (
                            <option className="text-black" value={livreur._id}>{livreur.first_name} {livreur.last_name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => { setEdit(false) }} btn='Close' />
                      <button onClick={OnclickBtn} type='button' className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>valider</button>
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

    </div>
  )
}

export default CommandManager