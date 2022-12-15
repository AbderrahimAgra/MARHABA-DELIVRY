import React from "react";
import { Link } from "react-router-dom";


function Client() {
  return (
    <div>

      <div className="flex flex-wrap justify-center">
        <div className="w-80 max-w-sm bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
          <img className="p-8 rounded-t-lg " src="../../../../public/assets/plat1.png" alt="product image" />
          <div className="px-5 pb-5 items-end ">
            <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
            <p className="text-sm font-normal">This is plat is perfect </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-black">$10</span>
              <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
            </div>
          </div>
        </div>
        <div className="w-80 max-w-sm bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">
          <img className="p-8 rounded-t-lg" src="../../../../public/assets/plat2.png" alt="product image" />
          <div className="px-5 pb-5 items-end ">
            <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
            <p className="text-sm font-normal">This is plat is perfect </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-black">$10</span>
              <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
            </div>
          </div>
        </div>
        <div className="w-80 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4 drop-shadow-2xl mr-6">
          <img className="p-8 rounded-t-lg" src="../../../../public/assets/plat3.png" alt="product image" />
          <div className="px-5 pb-5 items-end ">
            <h1 className="font-semibold tracking-tight text-black text-4xl">Plat Chicken</h1>
            <p className="text-sm font-normal">This is plat is perfect </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-black">$10</span>
              <Link to='#' className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Client
