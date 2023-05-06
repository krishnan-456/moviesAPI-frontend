import React, { useState } from 'react'
import logo from '../Assests/film.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <div className='w-[100%] h-20 flex items-center justify-between px-10 absolute top-0 z-50 glassmorphism'>
                <button className='' onClick={() => navigate("/")}>
                    <img src={logo} alt="logo" width={45} />
                </button>
                <div className='text-white cursor-pointer sm:block hidden'>
                    <ul className='flex items-center justify-center gap-8 font-semibold'>
                        <li>Genres</li>
                        <li>Collections</li>
                        <li className='border-2 px-4 py-2 hover:bg-white hover:text-black border-white'>Get started</li>
                    </ul>
                </div>
                <div className='text-white sm:hidden' onClick={handleNav}>
                    <HiOutlineMenuAlt4 size={28} />
                </div>
            </div>
            <div className={nav ? 'w-full h-screen bg-black fixed top-0 z-50 px-10 sm:hidden ' : 'w-full h-screen bg-black fixed top-[-99999px] z-50 px-10 sm:hidden'}>
                <div className='text-white cursor-pointer'>
                    <div className='flex items-center justify-between mt-5'>
                        <button className='' onClick={() => navigate("/")}>
                            <img src={logo} alt="logo" width={45} />
                        </button>
                        <div className='text-white'>
                            <MdOutlineClose size={28} onClick={handleNav} />
                        </div>
                    </div>
                    <ul className='flex flex-col items-center justify-center gap-10 font-semibold mt-[50%]'>
                        <li>Genres</li>
                        <li>Collections</li>
                        <li className='border-2 px-4 py-2 hover:bg-white hover:text-black border-white'>Get started</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar