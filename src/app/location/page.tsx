


'use client';
// pages/location.tsx
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Head from 'next/head';
import { FaMapMarkerAlt } from "react-icons/fa";
import { ArrowRightIcon } from '@radix-ui/react-icons';


const markerIcon = new L.Icon({
    iconUrl: '/marker-icon.png', // Use the correct URL for your marker icon
    iconSize: [38, 38], // Increased the size of the marker icon
    iconAnchor: [19, 38], // Adjusted the anchor point
});

const LocationPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [location, setLocation] = useState({
        x: 19.9278796,
        y: 74.73809
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };



    return (
        <div className="min-h-screen mt-12 flex w-full flex-col items-center justify-center ">
           <div className='max-h-screen relative overflow-hidden'>
                <section className="absolute left-1/4 top-24 bg-white/60 backdrop-blur-lg text-center text-black py-10 z-10">
                    <h1 className="text-4xl font-semibold mb-4 text-black">Arohi Softwares IT Company</h1>
                    <p className="text-lg text-black px-6">Find us at our office or get in touch with us for any inquiries. We are here to help you!</p>
                </section>
                <img className='-translate-y-11 scale-125 -z-10' src='https://cdn.dribbble.com/users/2096861/screenshots/18532623/media/7567479d6dd3db1282da37267a9cacc6.jpg' />
           </div>
            <Head>
                <title>Contact Us - Arohi Softwares</title>
                <meta name="description" content="Contact us at Arohi Softwares" />
            </Head>

            {/* Background image */}
            
            <main className="flex items-center justify-center w-full h-screen   p-6 bg-black shadow-lg rounded-lg z-10">


                <section className="flex  flex-col  px-12 justify-center gap-12  h-screen w-full md:grid-cols-2 ">
                    <div className='hover:bg-gradient-to-br p-[2px]  from-violet-400 to-orange-300'>
                        <button className='group w-full text-left border flex justify-between items-center p-2 bg-white text-black' onClick={() => setLocation({ x: 55.3, y: 23.2 })}>
                            <div>
                                <h3 className='text-3xl'>Ahmednagar, Maharashtra</h3>
                                <p>Full Address </p>
                            </div>
                            <ArrowRightIcon className='scale-150 transition-all -translate-x-6 group-hover:-translate-x-2' />
                        </button>
                    </div>
                    <div className='hover:bg-gradient-to-br p-[2px]  from-violet-400 to-orange-300'>

                    <button className='group w-full text-left border p-2 flex justify-between items-center bg-white text-black' onClick={() => setLocation({ x: 35.3, y: 23.2 })}>
                       <div>
                        <h3 className='text-3xl'>Pune,Maharashtra</h3>
                        <p>Upcoming</p>
                       </div>
                        <ArrowRightIcon className='scale-150 transition-all -translate-x-6 group-hover:-translate-x-2' />
                    </button>
                    </div>
                </section>
                <div className="border-8 w-[70vw] h-96 md:h-full rounded-lg overflow-hidden shadow-md">
                    <MapContainer center={[location.x, location.y]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[location.x, location.y]} icon={markerIcon} >
                            <Popup>
                                Arohi Softwares Location
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

               
            </main>

            <h2 className='text-3xl my-12'>Git in touch with us</h2>
            <form onSubmit={handleSubmit} className="flex rext-black flex-col space-y-4 h-44  p-6 shadow-md rounded-lg">
                <div className='grid grid-cols-5 gap-3'>
                    <div className='grid col-span-2'>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className='grid col-span-3'>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full text-black px-4 py-2 h-32 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-gray-800 text-white  rounded-md border border-black transition-colors duration-300">
                    Send Message
                </button>
                <div className="text-center">
                    <p className="text-blue-900" >or contact us via phone: <a href="tel:+1234567890" className="text-blue-900">+1 (234) 567-890</a></p>
                </div>
            </form>
        </div>
    );
};

export default LocationPage;
