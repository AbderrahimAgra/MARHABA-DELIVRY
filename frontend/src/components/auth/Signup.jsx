import React from "react";
import { Link } from "react-router-dom";
import Input from "./child_components/Input";
import Button from "./child_components/Button";
import Label from "./child_components/Label";

function Signup() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="fisrt_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="First Name" />
                  <Input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="first_name" name="first_name" placeholder="First Name" />
                </div>
                <div>
                  <Label htmlFor="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Last Name" />
                  <Input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="last_name" name="last_name" placeholder="Last Name" />
                </div>
                <div>
                  <Label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Phone" />
                  <Input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <Label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Email" />
                  <Input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" placeholder="name@company.com" />
                </div>
                <div>
                  <Label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Password" />
                  <Input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" name="password" placeholder="*********" />
                </div>
                <div>
                  <Label htmlFor="C_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Confirm Password" />
                  <Input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="C_password" name="C_password" placeholder="*********" />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Input type="checkbox" id="terms" aria-describedby="terms" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="terms" class="font-light text-gray-500 dark:text-gray-300" label="I accept the{' '}" />
                      <Link to="" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Terms and Conditions</Link>
                  </div>
                </div>
                <Button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Create an account" />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup