"use client";

import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardTable from "../components/DashboardTable";

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
    {/* <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={mobileOpen} toggle={() => setMobileOpen(!mobileOpen)} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={() => setMobileOpen(!mobileOpen)} />
        <main className="p-4 overflow-y-auto flex-1">
          <h2 className="text-xl font-semibold mb-4">Manage Your Press Releases</h2>
          <DashboardTable />
        </main>
      </div>
    </div> */}
    </>
  );
}
