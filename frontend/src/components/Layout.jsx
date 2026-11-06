import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-navy-900 text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
