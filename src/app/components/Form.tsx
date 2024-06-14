
"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


export function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="mt-[-1%] flex flex-1 justify-end items-center" style={{
      backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/035/801/456/large_2x/young-woman-sitting-on-online-meeting-in-outdoor-cafe-talking-to-laptop-camera-explaining-something-drinking-coffee-photo.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat:'no-repeat'
    }}>
      <div className="max-w-md w-full md:mx-5 rounded md:rounded-2xl my-3 p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-xl dark:text-gray-950">
          Welcome to ArohiSoftware
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2">
          Login to Arohi if you can because we don&apos;t have a login flow yet
        </p>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div>
              <Label htmlFor="firstname">First name</Label>
              <Input  id="firstname" placeholder="Tyler" type="text" className="dark:bg-gray-200 dark:text-gray-950 rounded" />
            </div>
            <div>
              <Label htmlFor="lastname">Last name</Label>
              <Input  id="lastname" placeholder="Durden" type="text" className="dark:bg-gray-200 dark:text-gray-950 rounded" />
            </div>
          </div>
          <div className="">
            <Label htmlFor="email">Email Address</Label>
            <Input  id="email" placeholder="projectmayhem@fc.com" className="dark:bg-gray-200 dark:text-gray-950 rounded" type="email" />
          </div>
          <div className=" text-gray-900">
            <Label htmlFor="password">Password</Label>
            <Input  id="password" placeholder="••••••••" type="password" className="dark:bg-gray-200 rounded dark:text-gray-950" />
          </div>
         <div className="flex justify-center">
          <button className="mt-6 group/btn flex  items-center justify-center px-4 dark:bg-gray-200 w-80 bottom-0 text-gray-950 rounded h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
          Sign up &rarr;
            </button>
            </div>
          <div className="from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          <div className="flex flex-col items-center space-y-3">
            <button className="relative group/btn justify-center flex space-x-2 w-80 items-center px-4 dark:text-gray-950 rounded h-10 font-medium shadow-input dark:bg-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
              <FaGithub className="h-4 w-4 dark:text-gray-950" />
              <span className="text-neutral-700 dark:text-gray-950 text-sm">
                GitHub
              </span>
     
            </button>
            <button className="relative group/btn flex space-x-2 w-80 items-center justify-center px-4 dark:text-gray-950 rounded h-10 font-medium shadow-input dark:bg-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
              <FcGoogle className="h-4 w-4 dark:text-gray-950" />
              <span className="text-neutral-700 dark:text-gray-950 text-sm">
                Google
              </span>
        
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const div = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

