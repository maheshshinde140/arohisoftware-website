"use client"
import React,{useRef} from 'react'
import ContentSlider from "../components/ContentSlider";
import CareersComponent from "../components/CareersComponent";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Footer from '../components/Footer';


const event = [
  {
    title:"FutureFest 2024: Unleashing Tomorrow's Innovations",
    date:"February 3, 2024",
    time:"10:00 AM - 8:00 PM",
    address:"Pune,Maharashtra",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat obcaecati commodi! Aperiam itaque ad, facere quaerat eum, provident rerum beatae obcaecati laudantium incidunt ipsum ipsa neque. ",
    imageUrl: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"FutureFest 2024: Unleashing Tomorrow's Innovations",
    date:"February 3, 2024",
    time:"10:00 AM - 8:00 PM",
    address:"Pune,Maharashtra",
    description:"Quaerat beatae excepturi rem amet placeat dolor perferendis, id aut error voluptatem ratione?.perspiciatis dicta.Maxime dolores, atque accusantium molestias assumenda, explicabo, consequatur nemo distinctio dolore ex fugiat quis quidem natus iusto!",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
function page() {
  return (
    <div className='min-h-screen bg-white'>
      <h1 className='text-white mt-32 text-center text-5xl font-thin'>Event</h1>
      <div className='w-[90vw] mx-auto mt-44'>
        {event.map((event,i) => {
          return <Event key={i} {...event}/>
        })}
      </div>
      <div className='flex gap-5 flex-col items-center justify-center my-24'>
        <h2 className='text-5xl text-black font-thin mb-12'>Gleams of Events</h2>
        <div className='translate-x-12'>
          <Carousels />
        </div>
        <div className='-translate-x-12'>
          <Carousels />
        </div>
        <div className='translate-x-12'>
          <Carousels />
        </div>

      </div>
      <CareersComponent/>
      <Footer/>


    </div>
  )
}


function Event({title,date,time,address,description,imageUrl}:{
  title:string,
  date:string,
  time:string,
  address:string,
  description:string,
  imageUrl:string,

}){
  return (
    <div className="hover:scale-[103%] lg:w-[80vw] mx-auto transition-all backdrop-blur-xl b flex mt-12 flex-col text-black md:flex-row bg-[#b7bdf8] p-6">
        <div className="md:w-1/2">
          <img
          src={imageUrl}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center mb-4">
            <span className="mr-2">📅</span>
            <p className="text-lg">{date}</p>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">⏰</span>
            <p className="text-lg">{time}</p>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">📍</span>
            <p className="text-lg">{address}</p>
          </div>
          <p className="mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
         {/* {   tags.map((tag,i) => {
              return <span key={i} className="px-3 py-1 bg-gray-200 rounded-md">{tag}</span>
            
            })} */}
            {/* <span className="px-3 py-1 bg-gray-200 rounded-md">Keynote Talks</span>
            <span className="px-3 py-1 bg-gray-200 rounded-md">Tech Demos</span>
            <span className="px-3 py-1 bg-gray-200 rounded-md">Startup Showcases</span>
            <span className="px-3 py-1 bg-gray-200 rounded-md">Networking Opportunities</span>
            <span className="px-3 py-1 bg-gray-200 rounded-md">Creative Workshops</span> */}
          </div>
          <button className="self-start bg-black text-white px-6 py-2 rounded-md">GET A TICKET</button>
        </div>
      </div>
    );
  };

export default page






export function Carousels() {

  const images = [
    "https://assets.lummi.ai/assets/Qmdkwg1U8TttG7EBZ8PVeYSQBSjCw53vgC9XKUMaAS4z7T?auto=format&w=1500",
    "https://assets.lummi.ai/assets/Qmf3ESd5FAiVufEuKfCeZCtuxVSPcxkynogjMvHjEtHNpb?auto=format&w=1500",
    "https://assets.lummi.ai/assets/QmfASNx9gWu4AZTrAvogsGeZa72YUKLbkopbcHdrzgAqy6?auto=format&w=1500",
    "https://assets.lummi.ai/assets/QmRujGEci3URiLwknwUJyr1fFzfBTT2L4KDuhBau5JVSFG?auto=format&w=1500 ",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square  items-center justify-center p-0">
                  <img width={1000} height={1000} className='object-cover' src={images[index]} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
