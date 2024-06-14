

import React from 'react';
import Image from 'next/image';
import 'animate.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './page.css';


const Page: React.FC = () => {
  return (
    <div className={`flex flex-1 w-full h-[96vh] md:flex-row flex-col-reverse justify-between items-center mt-6 px-6 lg:px-8 main`}>
      <div className="w-96 md:w-fit h-fit p-5 md:mt-14 mb-6 bg-white rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block p-3 w-full rounded border-0 py-1.5 placeholder:text-gray-950 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block p-3 w-full rounded border-0 py-1.5 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-3 mb-3 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-5">
          <p className="text-center text-sm border-gray-600 border-y-2 text-gray-500">
            Or Continue With
          </p>
          <div className="flex mt-5">
            <button
              className="flex mr-4 w-full justify-center rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
            >
              <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
            </button>
            <button
              className="flex w-full justify-center rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
            >
              <FcGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[15%] md:w-[40%] mb-6'>
        <h1 className='mb-10 text-3xl text-green-700 font-serif font-extrabold animate__animated animate__bounce animate__slower animate__infinite'>
          Welcome To Arohi Softwares
        </h1>
        <p className='text-sm font-semibold text-white font-serif animate__animated animate__slower animate__infinite'>
          Empower Your Business with Cutting-Edge Solutions: Seamless, Smart, and Secure. Welcome to Your Future with Arohi Software.
        </p>
      </div>
    </div>
  );
}

export default Page;




















