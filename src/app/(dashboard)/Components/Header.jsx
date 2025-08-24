"use client";
import { useSidebar } from "../context/SidebarContext";
import Link from "next/link";
import { FaBars, FaChevronDown, FaEnvelope, FaKey, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <>
      <header className="z-100 bg-white shadow-sm py-4 px-4 flex justify-between items-center ">
        <div className="flex items-center">
          <button
            className="mr-4 text-gray-700 focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars size={20} />
          </button>

          <div className="flex items-center">
            <span className="hidden md:inline-block font-semibold">FG NewsWire</span>
          </div>
        </div>

        <h2 className="hidden md:block text-lg font-semibold">User Panel</h2>

        <div className="flex items-center space-x-4">
          <Link
            href="https://dashboard.kingnewswire.com/viewticket"
            className="relative p-2 text-gray-700 hover:text-blue-600"
          >
            <FaEnvelope size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>

          <div className="relative">
            <button className="flex items-center space-x-2 bg-gray-100 rounded-full py-1 pl-1 pr-3">
              <img
                src="https://dashboard.kingnewswire.com/assets/no-img.jpg"
                alt="User Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden md:inline-block font-medium">Web Developer</span>
              <FaChevronDown size={12} />
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden">
              <Link href="https://dashboard.kingnewswire.com/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FaUserCircle className="mr-2" /> Profile
              </Link>
              <Link href="https://dashboard.kingnewswire.com/profile/password" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FaKey className="mr-2" />Change Password
              </Link>
              <div className="border-t my-1"></div>
              <Link
                href="https://dashboard.kingnewswire.com/logout"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
