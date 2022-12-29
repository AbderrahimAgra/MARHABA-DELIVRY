import {React, useState, useEffect} from "react";
import Input from "../../../components/Input";
import axios from 'axios'

function SettingLivreur() {

  const baseURL = 'http://localhost:5500/api/user/livreur'

  const [dataSetting, setDataSetting] = useState([])

  const getSetting = async() => {
    await axios.get(`${baseURL}/me`)
    .then(res => {
      setDataSetting(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getSetting()
  }, [])

  return(
    <div>
    <form className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-4 pt-9`}>
      <div class="relative z-0 mb-6 w-full group">
        <Input type="text" value={dataSetting.first_name} disabled name="first_name" id="first_name"  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" required />
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <Input type="text" name="last_name" value={dataSetting.last_name} disabled id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" required />
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <Input type="email" name="email" value={dataSetting.email} disabled id="email" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Email" required />
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <Input type="text" name="phone" value={dataSetting.phone} disabled id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="phone" required />
      </div></form>
    </div>
  )
}

export default SettingLivreur