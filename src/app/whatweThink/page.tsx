import React from 'react'
import ThinkCard from '@/app/components/ThinkCard'
import Footer from '@/app/components/Footer'


const sharedClasses = {
  textZinc: 'text-zinc-500 dark:text-zinc-400',
  textZincBold: 'text-zinc-900 dark:text-zinc-100',
  textBase: 'text-base',
  textLg: 'text-lg',
  leading6: 'leading-6',
  mt2: 'mt-2',
  mt4: 'mt-4',
  mt10: 'mt-10',
  maxW7xl: 'max-w-7xl',
  mxAuto: 'mx-auto',
  py12: 'py-12',
  px4: 'px-4',
  smPx6: 'sm:px-6',
  lgPx8: 'lg:px-8',
  textCenter: 'text-center',
  grid: 'grid',
  gridCols2: 'grid-cols-2',
  gridCols3: 'grid-cols-3',
  gapX8: 'gap-x-8',
  gapY10: 'gap-y-10',
  spaceY10: 'space-y-10',
  spaceY0: 'space-y-0',
};

const ValueItem = ({ title, description }) => (
  <div>
    <dt className={`${sharedClasses.textLg} ${sharedClasses.leading6} ${sharedClasses.textZincBold}`}>{title}</dt>
    <dd className={`${sharedClasses.mt2} ${sharedClasses.textBase} ${sharedClasses.textZinc} text-justify `}>{description}</dd>
  </div>
);
const Page = () => {
  return (
    <div>
      <div className='bg-black h-24'></div>

      <div className="sm:h-[85vh] h-[50vh] w-full pt-7" style={{
        backgroundImage: "url('/assets/WhatweThink/mainbackgraound.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='container h-full'>
          <div className='container mx-10 font-bold text-white-100 border-b-2 border-b-slate-300 py-3'>
            <p>Stay ahead of change</p>
          </div>
          <div className='container mt-6 content-center h-[70%]'>
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













      <div>
  





  <div className={`${sharedClasses.maxW7xl} ${sharedClasses.mxAuto} ${sharedClasses.py12} ${sharedClasses.px4} ${sharedClasses.smPx6} ${sharedClasses.lgPx8}`}>
    <div className={sharedClasses.textCenter}>
      <h2 className={`${sharedClasses.textLg} ${sharedClasses.textZincBold}`}>Our Vision</h2>
      <p className={`${sharedClasses.mt4} ${sharedClasses.textLg} ${sharedClasses.leading6} ${sharedClasses.textZinc} text-justify`}>At Arohi Software, we are driven by a vision to transform businesses through innovative technology solutions. Our insights and philosophies shape the way we approach challenges and create impactful solutions for our clients. Here, we share our thoughts on the evolving digital landscape, the future of business, and our commitment to excellence.</p>
    </div>
    <div className={sharedClasses.mt10}>
      <dl className={`${sharedClasses.grid} ${sharedClasses.gridCols2} ${sharedClasses.gapX8} ${sharedClasses.gapY10} lg:${sharedClasses.gridCols3}`}>
        <ValueItem title="Empowering Digital Transformation" description="We believe that digital transformation is not just about adopting new technologies but about fundamentally changing the way businesses operate and deliver value to their customers. Our goal is to empower businesses to navigate this transformation seamlessly and effectively. " />
        <ValueItem title="Innovation at the Core" description="Innovation is at the heart of everything we do. We continuously explore emerging technologies and develop innovative solutions that drive business growth and efficiency. From AI and machine learning to cloud computing and IoT, we are committed to staying at the forefront of technological advancements." />
        <ValueItem title="Customer-Centric Approach" description="Our customers are at the center of our universe. We are dedicated to understanding their unique needs and challenges, and we tailor our solutions to deliver maximum impact. We believe that building strong, long-term relationships with our clients is key to mutual success." />
       </dl>
    </div>
  </div>

  <div className={`${sharedClasses.maxW7xl} ${sharedClasses.mxAuto} ${sharedClasses.py12} ${sharedClasses.px4} ${sharedClasses.smPx6} ${sharedClasses.lgPx8}`}>
    <div className={sharedClasses.textCenter}>
      <h2 className={`${sharedClasses.textLg} ${sharedClasses.textZincBold}`}>Industry Insights</h2>
      <p className={`${sharedClasses.mt4} ${sharedClasses.textLg} ${sharedClasses.leading6} ${sharedClasses.textZinc} text-justify`}>In the rapidly evolving landscape of digital transformation, staying ahead of industry trends and technological advancements is crucial for business success. At Arohi Software, we leverage our deep expertise and cutting-edge research to provide valuable insights into the future of business and technology. We observe that the rise of AI and machine learning is reshaping industries, enabling companies to automate processes and make data-driven decisions with unprecedented accuracy.</p>
    </div>
    <div className={sharedClasses.mt10}>
      <dl className={`${sharedClasses.grid} ${sharedClasses.gridCols2} ${sharedClasses.gapX8} ${sharedClasses.gapY10} lg:${sharedClasses.gridCols3}`}>
        <ValueItem title="The Future of Online Business" description="As more businesses move online, the digital marketplace is becoming increasingly competitive. We see a future where personalized customer experiences, seamless integrations, and data-driven decision-making will be the differentiators that set successful businesses apart." />
        <ValueItem title="The Rise of AI and Automation" description="Artificial intelligence and automation are transforming industries at an unprecedented pace. We believe that these technologies will continue to revolutionize business operations, enabling companies to enhance productivity, reduce costs, and improve decision-making processes." />
        <ValueItem title="Cybersecurity: A Critical Imperative" description="In today's digital age, cybersecurity is more important than ever. We are committed to helping businesses protect their data and systems from cyber threats. Our approach to cybersecurity is proactive, comprehensive, and constantly evolving to address new challenges." />
       </dl>
    </div>
  </div>

      </div>













      <Footer />
    </div>
  )
}

export default Page
