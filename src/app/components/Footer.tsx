"use client";

import Link from "next/link";

function Footer() {
  return (
   <>
    <div className="">
      <footer className="footer bg-gray-900 lg:p-20 p-10 text-white grid lg:grid-cols-5 grid-cols-2 gap-8 lg:gap-0">
        <nav className="text-white ">
          <h6 className="footer-title text-white text-xl mb-4">Services</h6>
         <div className="font-thin ">
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Branding</Link>
              <Link href="/service"className="link hover:underline link-hover mt-2 block">Design</Link>
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Marketing</Link>
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Advertisement</Link>
         </div>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl mb-4">Company</h6>
          <div className="font-thin">
              <Link href="/leaders" className="link hover:underline link-hover mt-2 block">About us</Link>
              <Link href="/contact" className="link hover:underline link-hover mt-2 block">Contact</Link>
              <Link href="/jobs" className="link hover:underline link-hover mt-2 block">Jobs</Link>
              <Link href={"/press"} className="link hover:underline link-hover mt-2 block">Press kit</Link>
          </div>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl mb-4">Legal</h6>
          <div className="font-thin">
              <Link href="/terms" className="link hover:underline link-hover mt-2 block">Terms of use</Link>
              <Link href="/policy" className="link hover:underline link-hover mt-2 block">Privacy policy</Link>
              <Link href="/policy" className="link hover:underline link-hover mt-2 block">Cookie policy</Link>
          </div>
        </nav>
        <form className="lg:col-span-1 col-span-2">
          <h6 className="footer-title text-white text-xl mb-4">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label ">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="username@site.com"
                className="input my-3 bg-black font-mono input-bordered rounded-lg p-3 flex-grow"
              />
              <button className="btn btn-primary p-2 h-12  rounded-xl bg-blue-600 ml-2">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div></>
  );
}

export default Footer;
