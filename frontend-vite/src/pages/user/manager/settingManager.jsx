import { React, useEffect, useState } from "react"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'


function SettingManager() {
  const [setting, setSetting] = useState([])

  const getSetting = async () => {
    const dataManager = await axios.get(`${baseURL}/me`)
    if (dataManager) {
      setSetting(dataManager.data)
    } else {
      console.log("error", err)
    }
  }

  useEffect(() => {
    getSetting()
  }, [])

  return (
    <div>
      <form className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-4 pt-9`}>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="first_name" id="first_name" value={setting.first_name} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="last_name" id="last_name" value={setting.last_name} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="email" name="email" id="email" value={setting.email} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Email" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="phone" id="phone" value={setting.phone} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="phone" required />
        </div>
        <Button type="submit" class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Submit" />
      </form>


    </div>


  )
}

export default SettingManager