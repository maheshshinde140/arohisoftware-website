"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface FeedformProps {
  title: string;
}

const Feedform: React.FC<FeedformProps> = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 bg-gradient-to-r from-purple-600 to-[#020817] p-10 text-white flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold mb-4">Think Tomorrow With Arohi Software</h1>
        <p className="mb-4">Empowering Futures through Innovative Software Solutions</p>
        <p className="mb-4">
        Join us as we shape the future of software solutions, driving progress and success for businesses worldwide.
        </p>
        <div className="flex space-x-4 mt-4">
  
          <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-white text-lg text-purple-600 px-4 py-2 rounded-lg">Absolutely Yes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
          Yes, I&apos;am absolutely sure.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
             <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-white text-lg text-purple-600 px-4 py-2 rounded-lg"> Not Completely</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
          No, not now!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

        </div>
      </div>
      <div className="flex-1 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-xl font-black mb-4 text-start text-gray-500">Get Started</h2>
        <h1 className="text-2xl md:text-3xl text-start text-black lg:text-4xl font-bold mb-3">
          {title}
        </h1>

        <p className="text-md mb-5 font-sans text-black">business</p>
        <form className="lg:space-y-4 mb-5">

          <div className="lg:flex lg:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="lg:flex-1 w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="lg:flex-1 border-b-2  w-full focus:border-purple-600 text-[#0a0a0a]  border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4 ">
            <input
              type="text"
              placeholder="Phone"
              maxLength={10}
              className="lg:flex-1 border-b-2  w-full focus:border-purple-600 text-[#0a0a0a] p-2 border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company"
              className="lg:flex-1 border-b-2 w-full focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4 ">
          <input
            type="text"
            placeholder="We are looking for"
            className="lg:flex-1 w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
          />
            <input
              type="text"
              placeholder="Message"
              className="lg:flex-1  w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 pt-10 pb-4">
            <input type="checkbox" id="agree" className="form-checkbox" />
            <label htmlFor="agree" className="text-sm text-black">
              I agree to your{" "}
              <a href="#" className="text-blue-500">
                privacy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                cookie
              </a>{" "}
              policies.
            </label>
          </div>
          <div className="flex items-center space-x-1 pb-4">
            <div className="bg-black text-white px-4 py-2">2 + 1 =</div>
            <input
              type="text"
              className="lg:flex-1 border-2 focus:border-purple-600 text-[#0a0a0a] p-2 focus:outline-none border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedform;
