import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black p-3 flex  items-center">
      <div className="flex mr-6 items-center ">
        {/* Logo */}
        <img src="../public/image/Rod_Dlogo.jpg" alt="Logo" className="h-16 w-16 mr-3" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg"> <NavLink to="/" className="text-white hover:text-amber-400">RodD</NavLink></span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-amber-400">หน้าหลัก</NavLink></li>
        <li><NavLink to="/About" className="text-white hover:text-amber-400">เกี่ยวกับเรา</NavLink></li>
        <li><NavLink to="/Contact" className="text-white hover:text-amber-400">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar