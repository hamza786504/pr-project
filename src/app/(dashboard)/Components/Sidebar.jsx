import React, { useState } from "react";
import {
  FaHome,
  FaNewspaper,
  FaBuilding,
  FaFileAlt,
  FaBoxOpen,
  FaWallet,
  FaEnvelope,
  FaChartBar,
  FaAngleDown,
} from "react-icons/fa";

const navItems = [
  { label: "Dashboard", icon: <FaHome />, path: "#" },
  {
    label: "Manage Press Release",
    icon: <FaNewspaper />,
    submenu: ["All Press Releases", "Add New"],
  },
  {
    label: "Guest Posts",
    icon: <FaFileAlt />,
    submenu: ["All Posts", "Submit New"],
  },
  { label: "Reports", icon: <FaChartBar />, path: "#" },
  {
    label: "Manage Company",
    icon: <FaBuilding />,
    submenu: ["Company Info", "Team"],
  },
  { label: "Packages", icon: <FaBoxOpen />, path: "#" },
  { label: "Reseller Packages", icon: <FaBoxOpen />, path: "#" },
  { label: "Guest Posting Package", icon: <FaEnvelope />, path: "#" },
  { label: "My Transaction", icon: <FaWallet />, path: "#" },
  { label: "Press Room", icon: <FaFileAlt />, path: "#" },
  { label: "PR Balance", icon: <FaWallet />, path: "#" },
];

export default function Sidebar({ isOpen, toggle }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden md:block"
      } w-64 bg-gradient-to-br from-blue-500 to-purple-500 text-white h-screen sticky top-0 z-20 overflow-y-auto transition-all`}
    >
      <div className="px-6 py-4 font-bold text-lg">King Newswire</div>
      <nav className="space-y-1 px-4">
        {navItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => (item.submenu ? handleToggle(index) : null)}
              className="w-full flex justify-between items-center text-left py-2 px-2 hover:bg-white/10 rounded"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.submenu && <FaAngleDown />}
            </button>
            {item.submenu && openIndexes.includes(index) && (
              <ul className="ml-6 space-y-1 text-sm text-white/90">
                {item.submenu.map((sub, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
