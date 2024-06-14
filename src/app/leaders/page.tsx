import React from 'react'
import LeadersCards from '@/app/components/LeadersCards/LeadersCards'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import img1 from './../../../public/oneBoy.png'

const page = () => {
    return (
        <div>
            <div className='sm:h-[90vh]  h-[60vh]  bg-white sm:flex flex-wrap justify-center gap-8 items-center text-black'>

                <div className=' p-[80px] lg:p-[0px] lg:w-[30vw]'>
                    <h1 className='sm:text-6xl text-3xl    font-bold pb-3'>Leadership</h1>
                    <p className='text-1xl pt-3 font-light '>Our executive leadership team averages years of experience <br></br> with Arohi.</p>
                </div>
                <div className='sm:h-[40vh]  h-[20vh] w-[100vw] lg:w-[50vw]   sm:w-[80vw]' style={{
                    backgroundImage:
                        "url(https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                </div>

            </div>

            {/* <div className='bg-gray-200 py-6 text-black h-[100vh]'>
                <div className=' w-[80vw]  m-auto'>
                    <h1 className='sm:text-6xl text-2xl text-center font-bold'>Our leaders</h1>
                    <div className='m-auto  sm:w-[30vw]  '>
                        <LeadersCards imgages='img1' altText='this is img' text='Chair & CEO' title='sir' />

                    </div>

                    <div className='  sm:flex flex-wrap justify-between '>
                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

                        <LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

                    </div>

                </div>


            </div> */}
            <Footer />
        </div>
    )
}

export default page
