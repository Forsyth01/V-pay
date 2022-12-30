import React from 'react';
import Affliate from './Affliate';

const Header = () => {
    return (
        <div>
            <div className="m-auto w-[85%] py-20">
                <div className="md:flex items-center gap-5 space-y-10 md:space-y-0">
                    <div className="w-[100%] space-y-3">
                        <h1 className="font-bold text-4xl">The fastest and easiet way to send and receive money anywhere!</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione a illo, quisquam laborum doloremque aspernatur incidunt aperiam nam sint magnam deleniti vitae veniam nobis exercitationem iusto accusantium adipisci hic.</p>
                        <div className="flex gap-3">
                        <button className='border-2 rounded-lg px-4 py-2 hover:bg-gray-900 hover:text-white'>Login</button>
                        <button className='border-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-900'>Apply now</button>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <img src="/Images/176.png" alt="" className="h-[50vh] object-cover" />
                    </div>
                </div>
            </div>
            <Affliate/>
        </div>
    );
};

export default Header;