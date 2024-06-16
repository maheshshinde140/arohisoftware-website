import React from 'react'
import WorkCard from '@/app/components/WorkCard/WorkCard'
import Footer from '@/app/components/Footer'
import StayConnected from '../components/StayConnected';

const page = () => {
    return (
        <div className='bg-white'>
            <div className=' flex flex-col-reverse lg:flex-row justify-center items-center text-black h-[100vh]'>
                <div className='text-start md:ml-24 p-5 md:w-[80vw]'>
                    <h1 className='text-black font-bold text-3xl md:text-6xl mb-5'>Careers for <br /> Experienced Professionals</h1>
                    <p className='text-black font-medium mb-5'>Bring your expertise to some of the most influential organizations in the world, transforming industries alongside the best of the best.</p>
                </div>
                <div className='h-[80vh] w-[100vw] lg:w-[70vw] ' style={{
                    backgroundImage: "url('https://dynamicmedia.accenture.com/is/image/accenture/Workmates-talking-office?qlt=85&wid=1024&ts=1657868743370&fit=constrain&dpr=off')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                   backgroundRepeat: "no-repeat",
                }}></div>
            </div>

            <div className='bg-gray-200 text-black'>
                <div className='container my-5 pt-8 m-auto'>
                    <h1 className='text-black font-bold text-3xl lg:text-5xl'>Chart your course</h1>
                    <p className='mb-5 mt-5 lg:max-w-[60%]'>Get to know Arohi Softwares and find your fit. If you want to contribute across a range of industries and make a real difference, here’s where your experience could be put to work:</p>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Group-Discussions:16x9?ts=1710823877471&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                    </div>
                </div>
            </div>
            <StayConnected/>
            <Footer />
        </div>
    );
};

export default page;
