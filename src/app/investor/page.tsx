import React from 'react'
import Footer from '../components/Footer'
import PerformanceCard from '../components/PerformanceCard/PerformanceCard'
const page = () => {
  return (
    <div>

      <div className=' absolute inset-0 bg-cover opacity-45 ' style={{ backgroundImage: `url(https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=)` }}></div>
      <div className="relative flex flex-col sm:p-[150px] p-[80px]  h-screen">
        <h1 className="pb-2 font-sans font-medium text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          WHAT WE DO /  INVESTOR RELATIONS
        </h1>
        <hr className=" bg-white h-[2px]" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} />
        <div className=' sm:h-[600px]   lg:w-[800px] sm:w-[500px] mt-10 p-8 ' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <h1 className='sm:text-6xl text-3xl font-mono'>ACCENTURE 360° VALUE</h1>
          <p className='sm:pt-14 pt-5 font-normal text-1xl w-[60vw] sm:w-[500px]'>We define 360° value as delivering the financial business case and unique value a client may be seeking, and striving to partner with our clients to achieve greater progress on inclusion and diversity, reskill and upskill our clients’ employees, help our clients achieve their sustainability goals, and create meaningful experiences, both with Accenture and for the customers and employees of our clients.</p>
          {/* <button className=' bg-white font-bold  text-black rounded-md p-2 mt-[60px]' >Let's Connect</button> */}
        </div>

      </div>
      {/* preformance */}

      <div className='  text-black   bg-white xl:h-[60vh] sm:h-[90vh]'>
        <div className=' w-[70vw] m-auto  '>

          <h1 className='sm:text-5xl text-2xl mb-3   font-bold pt-6 '>FY2023 PERFORMANCE</h1>

          <div className='flex flex-wrap  mt-10 '>
            <PerformanceCard title='Compound annual total return to shareholders over the last 5 fiscal years' text='978' />
            <PerformanceCard title='Compound annual total return to shareholders over the last 5 fiscal years' text='978' />

            <PerformanceCard title='Compound annual total return to shareholders over the last 5 fiscal years' text='978' />

            <PerformanceCard title='Compound annual total return to shareholders over the last 5 fiscal years' text='978' />


          </div>

        </div>

      </div>
      {/* overview */}

      <div className='bg-gray-200 text-black sm:h-[90vh] xl:h-[60vh] w-full'>
        <div className='container  sm:h-[90vh] sm:w-[90vw] xl:w-[70vw] py-8 m-auto '>
          <h1 className='font-bold text-2xl sm:text-5xl text-center'>COMPANY OVERVIEW</h1>
          <p className='text-black font-normal mt-6'>Accenture is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services - creating tangible value at speed and scale. We are a talent- and innovation-led company with 742,000 people serving clients in more than 120 countries. Technology is at the core of change today, and we are one of the world’s leaders in helping drive that change, with strong ecosystem relationships. We combine our strength in technology and leadership in cloud, data and AI with unmatched industry experience, functional expertise and global delivery capability. We are uniquely able to deliver tangible outcomes because of our broad range of services, solutions and assets across Strategy & Consulting, Technology, Operations, Industry X and Song. These capabilities, together with our culture of shared success and commitment to creating 360° value, enable us to help our clients reinvent and build trusted, lasting relationships. We measure our success by the 360° value we create for our clients, each other, our shareholders, partners and communities. Learn more about how we are measuring value in all directions with Accenture’s 360° Value Integrated Reporting.</p>
        </div>

      </div>

      <div className='bg-white   text-black lg:h-[50vh]  sm:h-[90vh] w-full py-10'>

        <div className='bg-gray-200 text-black  lg:h-[50vh] h-[90vh]  sm:h-[70vh]'>

          <div className='    sm:flex flex-wrap lg:justify-evenly   m-auto h-[40vh]'>
            <div className='sm:w-[30vw] lg:w-[30vw]  w-[60vw] h-[40vh] text-center py-10  sm:h-[40vh]  '>
              <h1 className='font-bold text-4xl'>IR Contacts</h1>
              <h1 className='text-blue-900 font-bold my-6 cursor-pointer '>90879076</h1>
              <p className='cursor-pointer text-blue-800 font-bold'>arohisoftware@gmail.com</p>
            </div>
            <div className='w-[30vw]  lg:w-[30vw] sm:w-[40vw] py-10  h-[40vh]'>

              <h1 className='font-bold text-4xl '>Register for <br />
                Investor Email Alerts</h1>
              <button></button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
