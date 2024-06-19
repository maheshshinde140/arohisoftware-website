


'use client';
// pages/location.tsx
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Head from 'next/head';
import { FaMapMarkerAlt } from "react-icons/fa";

const markerIcon = new L.Icon({
  iconUrl: '/marker-icon.png', // Use the correct URL for your marker icon
  iconSize: [38, 38], // Increased the size of the marker icon
  iconAnchor: [19, 38], // Adjusted the anchor point
});

const LocationPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Head>
        <title>Contact Us - Arohi Softwares</title>
        <meta name="description" content="Contact us at Arohi Softwares" />
      </Head>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/Shrigonda.10.png" alt="Background" className="object-cover w-full h-full opacity-50" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <main className="w-full max-w-5xl p-6 bg-black shadow-lg rounded-lg z-10">
        <section className="text-center text-white py-10">
          <h1 className="text-4xl font-semibold mb-4 text-gray-500">Arohi Softwares IT Company</h1>
          <p className="text-lg text-gray-400">Find us at our office or get in touch with us for any inquiries. We are here to help you!</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-500 p-6 shadow-md rounded-lg">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
            <div className="text-center">
              <p className="text-blue-900" >or contact us via phone: <a href="tel:+1234567890" className="text-blue-900">+1 (234) 567-890</a></p>
            </div>
          </form>
          <div className="map-container w-full h-96 md:h-full rounded-lg overflow-hidden shadow-md">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]} icon={markerIcon} >
                <Popup>
                  Arohi Softwares Location
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LocationPage;
