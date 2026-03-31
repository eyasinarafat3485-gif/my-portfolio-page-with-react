import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    "id": 1,
    "name": "Home",
    "path": "/",
    "icon": ""
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about",
    "icon": "UserIcon"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services",
    "icon": "BriefcaseIcon"
  },
  {
    "id": 4,
    "name": "Projects",
    "path": "/projects",
    "icon": "ImageIcon"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact",
    "icon": "PhoneIcon"
  }
];

const Navbar = () => {
 
  const [open, setOpen]= useState(false);
  const links= navLinks.map(route=> <Link key={route.id} route={route}></Link>)

    return (
        <nav className='bg-red-100'>
          <div className='flex justify-between mx-0 md:mx-5 p-5'>
            <div className='flex gap-5 justify-center align-centre text-center ml-4'>
            {/* <img src="" alt="" /> */}
            {/* <button  className='bg-orange-600 rounded-[40%] md:rounded-[47%] p-1 -m-2 text-white font-bold'>EA</button> */}
            <a className='bg-red-500 rounded-full p-2 -m-2 w-10 h-10 text-white font-bold' href=''>EA </a>
            <p className='text-xl font-bold'>EYASIN ARAFAT</p>
            </div>
            
          <span className='flex' onClick={() =>setOpen (!open)}> 
            <ul className='md:flex hidden'>
          {
            links
          }
          </ul>
           <ul className={`md:hidden ${open ? 'mt-6 pl-2' : '-mt-80 pl-2'}  duration-1000 `}>
            {links}
          </ul>
          {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>} 
          </span>
         
          </div>
         
          
           
        </nav>
    );
};

export default Navbar;