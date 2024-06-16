import React from 'react'

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
    <div className='min-h-screen'>
      <h1 className='text-white mt-32 text-center text-5xl font-thin'>Event</h1>
      <div className='w-[90vw] mx-auto mt-44'>
        {event.map((event,i) => {
          return <Event key={i} {...event}/>
        })}
      </div>
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
