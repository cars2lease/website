import { Link } from 'gatsby'
import React from 'react'
import { AiFillCar } from 'react-icons/ai';

const Navbar = ({ path }) => {
  console.log(path);

  const normal = "mr-5 hover:text-gray-900";
  const active = "mr-5 text-red-500 hover:text-gray-900";

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className='w-10 h-10 text-white p-2 bg-red-500 rounded-full'>
            <AiFillCar size={24} className="mx-auto" />
          </div>

          <span className="ml-3 text-xl">CTL Leasing ApS</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to='/' className={path === "/" ? active : normal}>Hjem</Link>
          <Link to='/flexleasing' className={path === "/flexleasing" ? active : normal}>Flexleasing</Link>
          <Link to='/pricing' className={path === "/pricing" ? active : normal}>Hvad koster det?</Link>
          <Link to='/flexleasing#leasingSuggestions' className={path === "/flexleasing#leasingSuggestions" ? active : normal}>Forslag</Link>
          <Link to='/contact' className={path === "/contact" ? active : normal}>Kontakt</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar