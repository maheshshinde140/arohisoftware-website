"use client"

import WorkCard from "@/app/components/WorkCard/WorkCard"
import './worken.css'


import Footer from "@/app/components/Footer"


function page() {
  return (
    <div>
      <div className='  bg-black h-24'>

      </div>

      <div className=" bg-white ">


        <div className="container  flex justify-around items-center flex-wrap h-[80vh] ">

          <div className=" w-5/12">
            <p className="text-black text-6xl font-bold">Arohi Work <br></br> Environment</p>
            <p className="text-black font-light text-1xl mt-5">Be your best every day in a workplace culture that helps drive innovation in everything you do.</p>
          </div>

          <div className="h-[55vh] w-7/12" style={{
            backgroundImage:
              "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-marquee?qlt=85&wid=1024&ts=1686340609764&fit=constrain&dpr=off')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

          </div>
        </div>


      </div>

      <div className=" h-[80vh] bg-gray-200 ">
        <div className="container">
          <p className="text-black text-5xl text-center pt-6  font-bold">Innovating in a truly human way
          </p>

          <div className="container mt-6  flex justify-around items-center " >
            <div className="w-[35vw] ">
              <p className="text-black font-midium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel quos facere sapiente. Nisi incidunt velit cum inventore qui odit error quam quasi, dolorum expedita enim, fugiat dicta nesciunt corrupti!
                <br />
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati hic earum ipsa harum quod expedita, dolores, dolorem unde alias nesciunt culpa excepturi sed sint repudiandae natus laudantium ipsam voluptatum?
                <br />
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa fugit accusamus eaque ipsam. Numquam ipsum, qui fuga quibusdam, iste vitae velit quidem impedit, laboriosam totam id reiciendis voluptates illo.
              </p>
            </div>

            <div className="h-[55vh] w-4/12 " style={{
              backgroundImage:
                "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-img1?qlt=85&wid=800&ts=1704397327799&fit=constrain&dpr=off')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>

            </div>

          </div>
        </div>

      </div>


      <div className='workBalance'>

<div className='workBalance-container'>
    <h2>Work your way</h2>
    <span>Balance your work and personal life with a range of workplace options and innovative tools that <br></br> help you stay connected globally.</span>


    <div className='displayCard' >
<WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />
<WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment2-768x432?qlt=85&wid=480&ts=1686340609442&fit=constrain&dpr=off' altText='this is img' text='Work from a location other than a designated Accenture office or project site.' title="Telecommute" />
<WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment3-768x432?qlt=85&wid=480&ts=1692306911474&fit=constrain&dpr=off' altText='this is img' text='Manage your time away from home with fly-back flights, compressed workweeks, extended weekends and time at client.' title="Client-Site Flexibility" />
    </div>

</div>

</div>

      <Footer/>

    </div>
  )
}

export default page
