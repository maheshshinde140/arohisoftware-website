import React from 'react'
import ThinkCard from '@/app/components/ThinkCard'
import Footer from '@/app/components/Footer'
const page = () => {
  return (
    <div>
     
     <div className='  bg-black h-24'>

</div>

<div className=" sm:h-[85vh]  h-[50vh] w-full pt-7 " style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg')",
                    backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>
                  <div className='container  '>
                    <div className='container  mx-10   font-bold text-white-100 border-b-2 border-b-slate-300 py-3'>
                      <p > Stay ahead of change</p>
                    </div>
                    <div className='container mt-6'>
                      <p className=' font-normal text-lg sm:text-3xl '>
                      Explore our research, insights, and examples of real  <br/>  client impact, designed to help you embrace the key forces  <br/>  of change and get to value faster.
                      </p>
                    </div>

                  </div>


  
</div>

{/* cards display */}
<div className='container  flex justify-around pt-10 flex-wrap '>

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />

<ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
</div>

      <Footer/>
    </div>
  )
}

export default page
