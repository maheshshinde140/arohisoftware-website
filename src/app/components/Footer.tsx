"use client";

function Footer() {
  return (
    <div>
      <footer className="footer lg:p-20 p-10 text-white grid lg:grid-cols-4 grid-cols-2 gap-8">
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl">Services</h6>
          <a className="link link-hover mt-2">Branding</a>
          <a className="link link-hover mt-2">Design</a>
          <a className="link link-hover mt-2">Marketing</a>
          <a className="link link-hover mt-2">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company</h6>
          <a className="link link-hover mt-2">About us</a>
          <a className="link link-hover mt-2">Contact</a>
          <a className="link link-hover mt-2">Jobs</a>
          <a className="link link-hover mt-2">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover mt-2">Terms of use</a>
          <a className="link link-hover mt-2">Privacy policy</a>
          <a className="link link-hover mt-2">Cookie policy</a>
        </nav>
        <form className="lg:col-span-1 col-span-2">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered flex-grow"
              />
              <button className="btn btn-primary ml-2">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Footer;