import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import home from "../assets/homepage.json";
import Lottie from 'lottie-react';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative bg-[#1a351f] text-white py-20 sm:py-32 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a351f] to-[#c8ff62] opacity-80 "></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between mt-[-2%]">
                {/* Left Section */}
                <div className="text-left max-w-2xl px-6 sm:px-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                        Your One-Stop Destination <br />
                        for <span className="text-[#c8ff62]">Career Success</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                        Find the perfect job that matches your skills and ambitions. Start your journey today!
                    </p>
                    

                    {/* Search Bar */}
                    <div className="w-[70%] flex items-center p-2 bg-white shadow-lg rounded-lg">
                        <input
                            type="text"
                            placeholder="Search for your dream job"
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full py-0.5 px-2 text-lg text-[#1a351f] placeholder-[light-grey] outline-none border-none rounded-l-lg"
                        />
                        <Button
                            onClick={searchJobHandler}
                            className="bg-[#c8ff62] hover:bg-[#a7e052] text-[#1a351f] hover:text-[white] p-2 rounded-r-lg transition-all"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Right Section - Animation */}
                <div className="w-50 sm:w-80 md:w-[27rem] mt-8 sm:mt-0 mr-[7%] mb-[5%]">
                    <Lottie
                        animationData={home}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            {/* Decorative Shapes for Styling */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#c8ff62] opacity-20 transform skew-y-6"></div>
        </div>
    )
}

export default HeroSection;
