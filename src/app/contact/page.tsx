"use client"; // Add this line to ensure this component is a client component

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import Footer from "../components/Footer";
const inputClasses = "w-full p-2 rounded bg-gray-700";
const flexClasses = "flex items-center mb-2";
const imgClasses = "mr-2";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const sharedClasses = {
  heading: "text-3xl font-bold mb-4",
  subHeading: "text-lg",
  phoneNumber: "text-2xl font-bold mb-2",
  paragraph: "mb-4",
  flexCol: "flex flex-col justify-around md:flex-row md:space-x-8",
  link: "text-blue-600 flex items-center",
  image: "mr-2",
};
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

<div className="max-w-7xl mx-auto p-6 mt-12">
        <h1 className="text-4xl font-bold mb-4">Contact Arohi</h1>
        <p className="mb-12">
          We appreciate your interest in Arohi. Please select the
          method below to contact us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className={`${sharedClasses.heading} text-3xl`}>General Inquiries</h2>
            <div className={sharedClasses.flexCol}>
              <div className="mb-4 md:mb-0">
                <p className={sharedClasses.phoneNumber}>+912240443934</p>
                <p className={sharedClasses.subHeading}>Toll-free from India</p>
              </div>
              <div>
                <p className={sharedClasses.phoneNumber}>+6566778139</p>
                <p className={sharedClasses.phoneNumber}>+6566778140</p>
                <p className={sharedClasses.subHeading}>
                  Outside the United States and Canada
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className={sharedClasses.heading}>Find A Location</h2>
            <p className={sharedClasses.paragraph}>
              View a list of local Accenture office information.
            </p>
            <a href="#" className={sharedClasses.link}>
              <IoLocation
              />
              Find office locations
            </a>
          </div>
        </div>
      </div>



      <div className=" min-h-screen text-white flex items-center justify-center lg:mt-0 mt-10 p-4">
        <div className="bg-zinc-900 rounded-lg lg:h-[85vh] h-fit gap-2 mt-20 shadow-lg w-full max-w-4xl flex  flex-col md:flex-row">
          <div
            className="p-8 md:w-1/2 rounded-lg content-center font-serif bg-zinc-800"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDI1rtrX5rNMVLUpRhlMKNDmaFZiqgyaoXwg&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="mb-4">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <div className="mb-4">
              <div className={flexClasses}>
                <FaMapLocationDot className={imgClasses} />
                <span>545 Mavis Island, Chicago, IL 99991</span>
              </div>
              <div className={flexClasses}>
                <CgPhone className={imgClasses} />
                <span>+91 1111111111</span>
              </div>
              <div className={flexClasses}>
                <MdAttachEmail className={imgClasses} />
                <span className="">Arohisoftware285@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 content-center h-fit">
            <form onSubmit={handleSubmit} className="space-y-4  h-fit">
              <div className="flex space-x-4  h-fit">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className={inputClasses}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className={inputClasses}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={inputClasses}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                className={inputClasses}
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                id="message"
                placeholder="Message"
                className="w-full p-2 bg-gray-700 rounded h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bg-purple-800 text-white p-2 rounded"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

 
      <Footer />
    </div>
  );
};

export default ContactForm;
