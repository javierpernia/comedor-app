import Image from 'next/image'
import React from 'react'
import LogoIcon from '../assets/images/logo.svg'
import { GiHamburgerMenu, GiFullPizza } from "react-icons/gi";
import CloseMenuIcon from '../assets/images/icon-close-menu.svg'
import { SlClose, SlMenu } from "react-icons/sl";

export const Header = () => {
  return (
    
    <header className="border-2 border-white bg-[#00000069] flex items-center justify-between p-2 header fixed w-full  top-0 left-0 z-50">
      <GiFullPizza  className="" alt="logo" size={32} />
      <GiHamburgerMenu size={32} color="white" id="hamburger-menu-icon" className="hamburger-menu cursor-pointer fill-white lg:hidden" />

      <nav className="flex w-max [&_li]:list-none [&_li]:mb-6 [&>.front>ul>li>ul]:ml-5 absolute top-0 right-0 lg:block lg:relative lg:w-full hidden" id="main-nav">
        <div className="back bg-[hsl(0,0%,41%)] opacity-75 fixed left-0 top-0 w-screen h-full lg:hidden" id="menu-background">
        </div>

        <div className="front bg-[hsl(0,0%,98%)] w-[240px] right-0 top-0 h-full p-10 text-gray-950 fixed lg:flex 
        lg:relative lg:content-between lg:items-center lg:w-full lg:p-0 lg:h-fit
        lg:bg-transparent
        lg:text-white 
        lg:font-semibold">
          <div className="close-img-container cursor-pointer lg:hidden">
            <SlClose id="close-btn" className="ml-auto mr-0" />
          </div>
          
          <ul id="menuList">
            <li>
              <button className="submenuBtn" id="features-btn">
                <span>Inicio</span> 
              </button>
            </li>
            <li><button className="submenuBtn" id="careers-btn"><span>Ingreso</span></button></li>
          </ul>

          
        </div>
        
      </nav>
    </header>
  )
}
