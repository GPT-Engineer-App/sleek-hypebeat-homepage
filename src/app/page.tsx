"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      title: "Breaking News: Market Hits All-Time High",
      description: "The stock market reached an all-time high today with major indices showing significant gains...",
      link: "#",
    },
    {
      title: "Tech Giants Release New Gadgets",
      description: "Leading tech companies have unveiled their latest gadgets in a grand event...",
      link: "#",
    },
    {
      title: "Global Warming: An Urgent Call to Action",
      description: "Scientists warn that immediate action is required to combat the effects of global warming...",
      link: "#",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Hypebeat</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">News</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Stay Informed with Hypebeat</h1>
          <p className="text-lg mb-8">Your trusted source for the latest news and updates.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Read More</a>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.link} className="text-blue-600 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Hypebeat</div>
            <div className="space-x-4">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; 2023 Hypebeat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}