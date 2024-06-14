"use client";

function Footer() {
  return (
   <>
    <div className="">
      <footer className="footer bg-gray-800 lg:p-20 p-10 text-white grid lg:grid-cols-4 grid-cols-2 gap-8">
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl mb-4">Services</h6>
          <a className="link link-hover mt-2 block">Branding</a>
          <a className="link link-hover mt-2 block">Design</a>
          <a className="link link-hover mt-2 block">Marketing</a>
          <a className="link link-hover mt-2 block">Advertisement</a>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl mb-4">Company</h6>
          <a className="link link-hover mt-2 block">About us</a>
          <a className="link link-hover mt-2 block">Contact</a>
          <a className="link link-hover mt-2 block">Jobs</a>
          <a className="link link-hover mt-2 block">Press kit</a>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl mb-4">Legal</h6>
          <a className="link link-hover mt-2 block">Terms of use</a>
          <a className="link link-hover mt-2 block">Privacy policy</a>
          <a className="link link-hover mt-2 block">Cookie policy</a>
        </nav>
        <form className="lg:col-span-1 col-span-2">
          <h6 className="footer-title text-white text-xl mb-4">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="flex">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered rounded-lg p-3 flex-grow"
              />
              <button className="btn btn-primary p-2  rounded-xl bg-blue-600 ml-2">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div></>
  );
}

export default Footer;
