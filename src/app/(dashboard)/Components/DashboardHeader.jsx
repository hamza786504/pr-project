import { FaBars, FaEnvelope, FaUserCircle } from "react-icons/fa";

export default function DashboardHeader({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
      <button onClick={toggleSidebar} className="md:hidden text-xl">
        <FaBars />
      </button>
      <h1 className="text-lg font-semibold">User Panel</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaEnvelope className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">0</span>
        </div>
        <FaUserCircle className="text-2xl" />
      </div>
    </header>
  );
}
