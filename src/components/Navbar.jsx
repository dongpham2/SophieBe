import React, { useEffect, useState } from 'react'
import LogoNex from "../assets/images/LogoNex.png"
import { Link } from 'react-scroll'
import {FaXmark, FaBars} from "react-icons/fa6"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsSticky(true)
      }
      else {
        setIsSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
    window.addEventListener("scroll", handleScroll)
    }
  })

  const navItems = [
    {link: "Home", path: "Home"},
    {link: "Service", path: "Service"},
    {link: "About", path: "About"},
    {link: "Product", path: "Product"},
    {link: "Testimonial", path: "Testimonial"},
    {link: "FAQ", path: "FAQ"},
  ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className='flex items-center justify-between text-base gap-8'>
          <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={LogoNex} className='w-10 inline-block items-center' /><span className='text-[#263238]'>SophieBe</span></a>
        <ul className='md:flex gap-5 space-x-2 hidden'>
          {
            navItems.map(({link, path}) => 
              <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-[#4caf4f] first:font-medium ' >{link}</Link>
            )
          }
        </ul>
        <div className='space-x-2 hidden lg:flex items-center '>
          <a href='/' className=' lg:flex item-center text-[#4caf4f]  hover:text-gray900'>Login</a>
          <button className='bg-[#4caf4f] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[#4d4d4d]'>Sign up</button>
        </div>
        <div className='md:hidden'>
          <button className='focus:outline focus:text-gray-500 text-[#4d4d4d]' onClick={toggleMenu} >
            {
              isMenuOpen ? (<FaXmark className='h-6 w-6 text-[#4d4d4d]' />) : (<FaBars className='h-6 w-6 text-[#4d4d4d]' />)
            }
          </button>
        </div>
        </div> 
      </nav>
      {/* mobile */}
      <div className={`space-y-4 px-4 mt-16 py-7 bg-[#4caf4f] ${ isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
          {
            navItems.map(({link, path}) => 
              <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-gray900 first:font-medium ' >{link}</Link>
            )
          }
      </div>
    </header>
  )
}

export default Navbar