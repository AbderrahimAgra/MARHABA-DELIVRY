import React from 'react';
import { Link } from 'react-router-dom';
import Input from './child_components/Input'
import Button from './child_components/Button'
import Label from './child_components/Label'

function Login() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Email" />
                  <Input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <div>
                  <Label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" label="Password" />
                  <Input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" />
                </div>
                <div className='flex items-center justify-between'>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" id="remember" aria-describedby="remember" />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label htmlFor="remember" class="text-gray-500 dark:text-gray-300" label="Remember me" />
                    </div>
                  </div>
                  <Link to="/forget-password" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                </div>
                <Button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" btn="Sign in" />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet?{' '}
                  <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login