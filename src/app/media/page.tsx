


"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";

interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsroomPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const openModal = (news: News) => {
    setSelectedNews(news);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const newsList: News[] = [
    {
      id: 1,
      title: "News Title 1",
      description: "Full description of news 1...",
      image: "/new1.png",
    },
    {
      id: 2,
      title: "News Title 2",
      description: "Full description of news 2...",
      image: "/new2.png",
    },
    {
      id: 3,
      title: "News Title 3",
      description: "Full description of news 3...",
      image: "/new3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Newsroom - Arohi Softwares</title>
        <meta name="description" content="Accenture Newsroom" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              <a href="/">Arohisoftwares</a>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-800">Home</a>
              <a href="#" className="text-gray-800">Newsroom</a>
              <a href="#" className="text-gray-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">Newsroom</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsList.map(news => (
                <div key={news.id} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <img src={news.image} alt="News" className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3
                    className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-300"
                    onClick={() => openModal(news)}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-600">Brief description of the news...</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsList.map(news => (
                <div key={news.id} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3
                    className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-300"
                    onClick={() => openModal(news)}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-600">Brief description of the news...</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Arohi Softwares. All rights reserved.
          </div>
        </div>
      </footer>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {selectedNews?.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {selectedNews?.description}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NewsroomPage;
