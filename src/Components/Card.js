import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiSecurePaymentLine } from "react-icons/ri"
import { AiOutlineArrowRight } from "react-icons/ai"
import { TbArrowsDownUp } from "react-icons/tb"
import { TiArrowLoopOutline} from "react-icons/ti"

const Cards = () => {
    const [maps, setMaps] = useState([
        {
            icons: <RiSecurePaymentLine />,
            title: "Secure Payment",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sit?",
            link: "Learn more",
            arrowIcon: <AiOutlineArrowRight />
        },
        {
            icons: <TiArrowLoopOutline />,
            title: "Sweet Money Early",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sit?",
            link: "Learn more",
            arrowIcon: <AiOutlineArrowRight />
        },
        {
            icons: <TbArrowsDownUp />,
            title: "Fast Payment",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sit?",
            link: "Learn more",
            arrowIcon: <AiOutlineArrowRight />
        },

    ])
    return (
        <div>
            <div className="m-auto w-[85%] md:grid grid-cols-3 gap-5 py-20 space-y-5 md:space-y-0">
                {maps.map((map) => (
                    <div>
                        <div className="space-y-2 bg-gray-200 cursor-pointer hover:bg-gray-300  p-5 rounded-lg">
                            <h1 className="font-semibold text-2xl">{map.icons}</h1>
                            <h1 className="font-bold text-lg">{map.title}</h1>
                            <h1 className="font-semibold">{map.text}</h1>
                            <div className="flex items-center gap-3">
                                <Link to="/"><p className="font-bold">{map.link}</p></Link>
                                <i className="font-semibold">{map.arrowIcon}</i>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Cards;