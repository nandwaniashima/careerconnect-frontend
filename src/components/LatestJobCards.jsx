import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    // Background colors for cards (example colors, can be customized)
    const cardBackgrounds = [
        
        'bg-gray-200',
    ];

    // Pick a random background for each card
    const cardBackground =
        cardBackgrounds[Math.floor(Math.random() * cardBackgrounds.length)];

    return (
        <div
            onClick={() => navigate(`/description/${job._id}`)}
            className={`${cardBackground}  p-4 text-sm rounded-lg shadow-md border border-gray-200 cursor-pointer transition-transform hover:scale-105`}

        >
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="font-bold text-lg text-gray-800">
                        {job?.company?.name}
                    </h1>
                    <p className="text-sm font-bold text-gray-500">{job?.company?.location}</p>
                </div>
                {/* Placeholder for company logo */}
               
                <Avatar className="border-2 border-gray-300 w-11 h-11 bg-gray-300 right-1 top-1 rounded-full flex items-center justify-center">
                        <AvatarImage
                            src={job?.company?.logo}
                            alt={job?.company?.name}
                        />
                    </Avatar>
            </div>

            {/* Job Title and Description */}
            <div>
                <h1 className="font-bold text-xl text-gray-900 mb-2">
                    {job?.title}
                </h1>
                
            </div>

            {/* Tags/Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
                <Badge
                    className="text-blue-700 bg-blue-200 font-semibold py-1 px-3 rounded-full"
                    variant="ghost"
                >
                    {job?.position} Positions
                </Badge>
                <Badge
                    className="text-red-700 bg-red-200 font-semibold py-1 px-3 rounded-full"
                    variant="ghost"
                >
                    {job?.jobType}
                </Badge>
                <Badge
                    className="text-purple-700 bg-purple-200 font-semibold py-1 px-3 rounded-full"
                    variant="ghost"
                >
                    {job?.salary} LPA
                </Badge>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center">
                
                <button
                    className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition"
                    onClick={() => navigate(`/description/${job._id}`)}
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default LatestJobCards;