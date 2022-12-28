import { React, useState, useEffect } from 'react'

// import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'
// const imagePath = 'http://localhost:5500/images'

function Client() {


const [repas, setrepas] = useState([])

  const [stati, Setstatiq] = useState("")
  
  const statistic = async () => {
        await axios.get(`${baseURL}/statistique`)
    .then((response) => {
      console.log(response)
      Setstatiq(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const affichagrep= async () => {

    

          const datarepas = await axios.get(`${baseURL}/GetAllProduct`)
          
          if (datarepas) {
            setrepas(datarepas.data)
            console.log(datarepas.data)
          } else {
            console.log("error", err)
          }
        }
        useEffect(() => {
          statistic()
          affichagrep()
        }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} mb-4 duration-300 flex flex-wrap justify-center`}>
      {repas.map((reppa, index) => (
        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 flex justify-center`}>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Repas</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">{stati.user}</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Categories</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">{stati.category}</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commands</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
          </div>
          <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">repas</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">{stati.meal}</p>
          </div>
        </div>
              ))}


{/*               
        <div  key={index} className="w-72  max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
          <img className='w-72 h-72 mb-5 p-5' src={ `${imagePath}/${reppa.images}` } alt="" />

          <div className="px-5 pb-5 items-end ">
            <h1 className="font-semibold tracking-tight text-black text-4xl">{reppa.name}</h1>
            <p className="text-sm font-normal">{reppa.description} </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-black"><span className='text-green'>$</span>{reppa.price}</span>
              <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
            </div> */}

      </div>

    </div>
  )
}


export default Client
