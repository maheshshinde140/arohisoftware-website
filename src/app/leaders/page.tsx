import React from 'react'
import LeadersCards from '@/app/components/LeadersCards/LeadersCards'
import Footer from '@/app/components/Footer'

const page = () => {
    return (
        <div>
            <div className='h-[70vh]  bg-white  flex justify-center gap-8 items-center text-black'>

                <div className=''>
                    <h1 className='text-6xl    font-bold pb-3'>Leadership</h1>
                    <p className='text-1xl pt-3 font-light '>Our executive leadership team averages years of experience <br></br> with Arohi.</p>
                </div>
                <div className='h-[40vh]   w-[50vw]' style={{
                    backgroundImage:
                        "url('https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                </div>

            </div>

            <div className='bg-gray-200 py-6 text-black h-[100vh]'>
                <div className=' w-[80vw] m-auto'>
                    <h1 className='text-6xl font-bold'>Our leaders</h1>
<div className='m-auto  w-[30vw]'>
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

</div>

<div className='  flex flex-wrap justify-between '>
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

</div>
                   
                </div>
                

            </div>
            <Footer/>
        </div>
    )
}

export default page
