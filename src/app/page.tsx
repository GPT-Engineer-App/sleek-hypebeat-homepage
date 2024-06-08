"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Hypebeat</div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-800">News</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Stay Updated with Hypebeat</h1>
          <p className="text-lg mb-6">Your daily dose of the latest news and trends</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example News Article */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Article Title</h3>
            <p className="text-gray-600 mb-4">Short description of the news article. This is a brief summary to entice readers to click and read more.</p>
            <Link href="/news/article" className="text-blue-600 hover:underline">Read More</Link>
          </div>
          {/* Repeat the above block for more articles */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>&copy; 2023 Hypebeat. All rights reserved.</div>
          <div className="space-x-4">
            <Link href="https://facebook.com" className="hover:underline">Facebook</Link>
            <Link href="https://twitter.com" className="hover:underline">Twitter</Link>
            <Link href="https://instagram.com" className="hover:underline">Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;