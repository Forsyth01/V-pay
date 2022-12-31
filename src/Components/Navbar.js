import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi"

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
        <div className={!open ? 'sticky top-0 md:block w-[100%] z-200 bg-gray-200 ' : "h-[100vh] md:h-[12vh] sticky top-0 md:block w-[100%] z-200 bg-gray-200"}>
            
            <div className="md:flex justify-between items-center py-5  space-y-14 md:space-y-0  m-auto w-[85%]">
                <div className="logo col-span-2 flex items-center justify-between md:w-[12%]">
                    <Link to="/"><p className="font-bold text-xl">V-pay</p></Link>
                    {!open && <p className="font-bold md:hidden text-xl cursor-pointer" onClick={handleOpen}><HiOutlineMenu /></p>}
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


                <div className={!open ? "logo md:flex hidden md:space-y-0 gap-3" : "md:flex items-center md:space-y-0 space-y-3 gap-3"}>
                    <button className='border-2 rounded-lg py-2 px-3 hover:bg-gray-900 hover:text-white w-[100%] md:w-[50%]'>Login</button>
                    <button className='border-2 rounded-lg py-2 px-3 bg-gray-900 text-white w-[100%] md:w-[100%]'>Apply now</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;