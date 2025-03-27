"use client";
import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";

export default function AdminHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Logo + Toggle Menu */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      {/* User Avatar */}
      <div className="relative">
        <button
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <UserCircle size={28} />
          <span className="hidden md:block">Admin</span>
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-red-500 hover:bg-red-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
