import React from 'react';
import Swiper from './Components/Swiper';

const Contact = () => {
    return (
        <div>
            <div className="m-auto w-[85%] md:flex py-10 space-y-10 md:space-y-0">
                <div className="w-[100%] space-y-3">
                    <h1 className="font-bold text-xl">Swift payment</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex unde molestias hic, iste dolore veritatis aliquid explicabo, numquam saepe eos voluptas iure optio fuga illum incidunt porro sunt enim!</p>
                    <button className="bg-gray-200 py-2 px-5 rounded-lg hover:bg-gray-300">Register</button>
                </div>
                <div className="md:w-[50%]">
                    {/* <Swiper /> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;