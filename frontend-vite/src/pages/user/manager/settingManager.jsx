import React from "react"
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function SettingManager() {
  return (
    <div>
      <form className="p-4 pt-9">
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Email" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="phone" required />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="City" required />
        </div>
        <Button type="submit" class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Submit" />
      </form>
    </div>
  )
}

export default SettingManager