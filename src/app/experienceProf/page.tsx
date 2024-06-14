import { url } from 'inspector'
import React from 'react'
import WorkCard from '@/app/components/WorkCard/WorkCard'
import Footer from '@/app/components/Footer'

const page = () => {
    return (
        <div>
            <div className='bg-white flex  justify-center items-center text-black  h-[80vh] '>
                <div className=' text-start ml-24'>
                    <h1 className='text-black font-bold text-6xl mb-5'>Careers for <br /> Experienced Professionals</h1>
                    <p className='text-black font-medium mb-5'>Bring your expertise to some of the most influential organizations in the world, transforming industries alongside the best of the best.</p>


                </div>

                <div className='h-[80vh] w-[70vw] ' style={{
                    backgroundImage: "url('https://dynamicmedia.accenture.com/is/image/accenture/Workmates-talking-office?qlt=85&wid=1024&ts=1657868743370&fit=constrain&dpr=off')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                </div>
            </div>

            <div className=' bg-gray-200 border text-black'>

                <div className='container mt-5 w-[80vw] border m-auto'>

                    <h1 className='text-black font-bold text-6xl mb-5'>Chart your course</h1>
                    <p className='mb-5'>Get to know Accenture and find your fit. If you want to contribute across a range of industries and make a real difference, here’s where your experience could be put to work:</p>
                    <div className='flex justify-between flex-wrap '>
                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />
                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />
                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />

                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />

                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />

                        <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default page
