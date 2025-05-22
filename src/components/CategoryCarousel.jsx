import React from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Software Engineer",
    "Data Analyst",
    "Prompt Engineer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle search and navigate
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query)); // Dispatch search query to Redux store
        navigate("/browse"); // Navigate to browse page
    };

    return (
        <div className="bg-[#f9fafb] py-16">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343a40] mb-4">Explore Jobs by Category</h2>
                <p className="text-lg text-[#6c757d] mx-auto max-w-2xl">
                    
                </p>
            </div>

            {/* Button Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto max-w-4xl">
                {
                    category.map((cat, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Button
                                onClick={() => searchJobHandler(cat)}
                                variant="outline"
                                className="px-6 py-4 text-lg font-semibold text-[#495057] border-2 border-[#c8ff62] 
                                    hover:bg-[#c8ff62] hover:text-white rounded-full transition-all transform hover:scale-105 duration-300">
                                {cat}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryCarousel;
