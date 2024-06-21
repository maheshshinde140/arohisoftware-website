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
    <div
      className="flex flex-1 justify-end items-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/035/801/456/large_2x/young-woman-sitting-on-online-meeting-in-outdoor-cafe-talking-to-laptop-camera-explaining-something-drinking-coffee-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div className="max-w-md w-full md:mx-5 rounded-lg my-3 p-8 bg-gray-900 bg-opacity-90 shadow-lg">
        <h2 className="font-bold text-3xl text-center text-white">Welcome to ArohiSoftware</h2>
        <p className="text-neutral-400 text-sm text-center mt-2">
          Login to Arohi if you can because we don&apos;t have a login flow yet
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Label htmlFor="firstname" className="text-white">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="lastname" className="text-white">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="group/btn flex items-center justify-center px-4 w-full max-w-xs bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded h-10 shadow-lg"
              type="submit"
            >
              Sign up &rarr;
            </button>
          </div>
          <div className="relative my-4 h-px w-full bg-gray-600" />
          <div className="flex flex-col items-center space-y-3">
            <button
              className="group/btn flex items-center justify-center px-4 w-full max-w-xs bg-gray-800 text-white text-sm font-semibold rounded h-10 shadow-lg"
              type="button"
            >
              <FcGoogle className="h-4 w-4 mr-2" />
              Sign up with Google
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

const div = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
