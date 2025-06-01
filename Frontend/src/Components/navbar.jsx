import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {

  const [open, setOpen] = React.useState(false)

  return (
    <nav className="flex fixed top-0 right-0 left-0 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white  transition-all">

            
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-xl">
                <Link to={"/"} className='hover:text-indigo-500'>Home</Link>
                <Link to={"/create"} className='hover:text-indigo-500'>Create</Link>
                <Link to={"/"} className='hover:text-indigo-500'>All inventory</Link>
                
  
            </div>

            <div className='sm:hidden lg:flex'>
              <h1 className='text-3xl pt-sans-bold text-indigo-500 text-shadow-lg'>
                Inventory Management System
              </h1>
            </div>

            <div className='flex'>

            <div className="hidden sm:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full m-2">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <i class="ri-search-2-line cursor-pointer"></i>
            </div>

            <div>
            <button className="hidden sm:flex x cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full m-2">
                    Login
            </button>
            </div>

            </div>

            
            

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                <i class="ri-menu-line cursor-pointer"></i>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>

                

              <div className='flex '>
                <button className="h-12 cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>

                <div className="flex h-12 items-center text-sm gap-2 border border-gray-300 px-3 rounded-full m-2">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <i class="ri-search-2-line cursor-pointer"></i>
                </div>
                </div>


            </div>

        </nav>
  )
}

export default navbar
