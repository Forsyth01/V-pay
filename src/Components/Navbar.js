import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineMenu} from "react-icons/hi"

const Navbar = () => {
    const [navLinks, setNavLinks] = useState([
        {
            home: <Link to="/"><p className="">Home</p></Link>,
            services: <Link to="#"><p className="">Services</p></Link>,
            aboutus: <Link to="#"><p className="">About us</p></Link>,
            features: <Link to="#"><p className="">Features</p></Link>,
            contactus: <Link to="#"><p className="">Contact us</p></Link>
        }
    ])

    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(false)

    function handleOpen() {
        setOpen(true)
        setClose(true)
    }
    function handleClose() {
        setOpen(false)
        setClose(false)
    }

    return (
        
        <div className='sticky top-0 md:block w-[100%] z-200 bg-gray-200'>
            <div className="md:grid grid-cols-6 items-center py-5  space-y-14 md:space-y-0  m-auto w-[85%]">
                <div className="logo col-span-2 flex items-center justify-between">
                    <Link to="/"><p className="font-bold text-xl">V-pay</p></Link>
                    {!open && <p className="font-bold md:hidden text-xl cursor-pointer" onClick={handleOpen}><HiOutlineMenu/></p>}
                    {open && <p className="font-bold md:hidden text-xl cursor-pointer" onClick={handleClose}>X</p>}

                </div>

                {navLinks.map((item) => (
                    <div className={!open ? 'logo md:flex items-center gap-4 col-span-3 font-semibold space-y-10 md:space-y-0 hidden' : "logo md:flex items-center gap-4 col-span-3 font-semibold space-y-6 md:space-y-0 "}>
                        <h1 className='border-2 py-4 px-4 hover:bg-gray-300 md:border-0 md:px-2 rounded-lg bg:border-0'>{item.home}</h1>
                        <h1 className='border-2 py-4 px-4 hover:bg-gray-300 md:border-0 md:px-2 rounded-lg bg:border-0'>{item.services}</h1>
                        <h1 className='border-2 py-4 px-4 hover:bg-gray-300 md:border-0 md:px-2 rounded-lg bg:border-0'>{item.aboutus}</h1>
                        <h1 className='border-2 py-4 px-4 hover:bg-gray-300 md:border-0 md:px-2 rounded-lg bg:border-0'>{item.features}</h1>
                        <h1 className='border-2 py-4 px-4 hover:bg-gray-300 md:border-0 md:px-2 rounded-lg bg:border-0'>{item.contactus}</h1>
                    </div>
                ))}


                <div className={!open ? "logo md:flex hidden space-y-5 md:space-y-0 gap-3 cols-span-2" : "logo md:flex space-y-5 md:space-y-0 gap-3 cols-span-2" }>
                    <button className='border-2 rounded-lg py-4 hover:bg-gray-900 hover:text-white w-[100%]'>Login</button>
                    <button className='border-2 rounded-lg py-4 bg-gray-900 text-white hover:bg-gray-200 w-[100%] hover:text-gray-900'>Apply now</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;