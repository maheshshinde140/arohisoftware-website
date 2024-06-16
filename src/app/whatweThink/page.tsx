import React from 'react'
import ThinkCard from '@/app/components/ThinkCard'
import Footer from '@/app/components/Footer'

const Page = () => {
  return (
    <div>
      <div className='bg-black h-24'></div>

      <div className="sm:h-[85vh] h-[50vh] w-full pt-7" style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='container'>
          <div className='container mx-10 font-bold text-white-100 border-b-2 border-b-slate-300 py-3'>
            <p>Stay ahead of change</p>
          </div>
          <div className='container mt-6'>
            <p className='font-normal text-lg sm:text-3xl'>
              Explore our research, insights, and examples of real<br />client impact, designed to help you embrace the key forces<br />of change and get to value faster.
            </p>
          </div>
        </div>
      </div>

      {/* Cards display */}
      <div className='container flex justify-around py-10 flex-wrap'>
        <ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/MandA-TL-image-3840x2160:rad-5x3?ts=1715047724829&fit=constrain&dpr=off' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/Hero_Smart_v1:rad-5x3?ts=1717518201472&fit=constrain&dpr=off' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paradox-Choice-CFOs-Hero-1200x400:rad-5x3?ts=1706171340303&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&dpr=off' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/Hero%20Image_3840x2160__Total%20Enterprise%20Reinvention%202024:rad-5x3?ts=1716508517954&dpr=off&wid=1600' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Commercial-Banking-Trends-2024-3840x2160:rad-5x3?ts=1713910608487&fit=constrain&dpr=off&wid=1600' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://dynamicmedia.accenture.com/is/image/accenture/ChatGPT_Hero_2064x1238_black_bg:rad-5x3-hd?ts=1710889004221&dpr=off&wid=1600' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
        <ThinkCard images='https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg' altText='this is img' title='Generative AI for customer growth' text='Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services.' />
      </div>

      <Footer />
    </div>
  )
}

export default Page
