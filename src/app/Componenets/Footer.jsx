"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoClose, IoRefresh  } from "react-icons/io5";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="bg-white border-t text-gray-800 relative">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime unde iusto deserunt inventore provident perferendis cum earum dignissimos similique!
          </p>
          <div className="flex space-x-3 mt-5">
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded text-xl font-bold">Z</a>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Digital Business Cards</a></li>
            <li><a href="#" className="hover:underline">Digital Catalog</a></li>
            <li><a href="#" className="hover:underline">Portfolio</a></li>
            <li><a href="#" className="hover:underline">Content Hub</a></li>
            <li><a href="#" className="hover:underline">Page</a></li>
            <li><a href="#" className="hover:underline">Digital Profile</a></li>
            <li><a href="#" className="hover:underline">Appointment Scheduling</a></li>
            <li><a href="#" className="hover:underline">Sales CRM</a></li>
            <li><a href="#" className="hover:underline">Site Builder</a></li>
            <li><a href="#" className="hover:underline">AI ChatBot</a></li>
            <li><a href="#" className="hover:underline">Email Signature</a></li>
            <li><a href="#" className="hover:underline">Marketplace</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Articles</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Discover</a></li>
            <li><a href="#" className="hover:underline">Business Listings</a></li>
            <li><a href="#" className="hover:underline">SaaS Directory</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Info</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">Sign Up</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t text-sm text-gray-600 py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright 2025 Zumvu Digital. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>

      {/* Floating Help Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#9B27B0] p-4 rounded-full text-white shadow-lg hover:bg-[#800ea3] transition duration-300"
            aria-label="Open Help Chat"
          >
            <BsFillChatDotsFill size={24} />
          </button>
        )}
      </div>

      {/* Help Popup */}
      {isChatOpen && (
           <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#9B27B0] text-white rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-1">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-sm">Zumvu Chatbot</h4>
        </div>
        <div className="flex gap-2">
          <button className="hover:text-gray-200" aria-label="Refresh">
            <IoRefresh size={18} />
          </button>
          <button
            onClick={() => setIsChatOpen(false)}
            className="hover:text-gray-200"
            aria-label="Close"
          >
            <IoClose size={20} />
          </button>
        </div>
      </div>

      {/* Message */}
      <div className="px-4 py-3 text-sm bg-gray-100 text-gray-700">
        Thanks for your visit. How can I assist you?
      </div>

      {/* Options */}
      <div className="space-y-2 px-4 py-3">
        <button className="w-full bg-white border border-gray-200 rounded-md px-4 py-2 text-left hover:bg-gray-50">
          Request Demo
        </button>
        <button className="w-full bg-white border border-gray-200 rounded-md px-4 py-2 text-left hover:bg-gray-50">
          Connect via Social Media
        </button>
        <button className="w-full bg-white border border-gray-200 rounded-md px-4 py-2 text-left hover:bg-gray-50">
          Contact Us
        </button>
      </div>

      {/* Start conversation button */}
      <div className="border-t px-4 py-3">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md">
          Start Conversation
        </button>
      </div>
    </div>
      )}
    </footer>
  );
};

export default Footer;
