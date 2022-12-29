import { React, useState, useEffect } from 'react'

// import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'
// const imagePath = 'http://localhost:5500/images'

function Manager() {


  const [stati, Setstatiq] = useState([])

  const statistic = async () => {
    await axios.get(`${baseURL}/statistique`)
      .then((response) => {
        console.log(response.data)
        Setstatiq(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    statistic()
  }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} mb-4 duration-300 flex flex-wrap justify-center`}>
        {stati.map((statu, index) => (
          <div key={index} className={`${open ? 'ml-72' : 'ml-20'} duration-300 flex justify-center`}>
            <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Repas</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">{statu.user}</p>
            </div>
            <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Categories</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">{statu.category}</p>
            </div>
            <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commands</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
            </div>
            <div class="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">repas</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">{statu.meal}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}


export default Manager
