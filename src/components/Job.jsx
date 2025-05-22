import React, { useMemo } from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();

    // Array of colors
    const colors = ['#e3dbfa', '#fbe2f4', '#ffede0', '#d4f6ed','#d9f6fa','#dde0e5'];

    // Randomly select a color when the component is rendered
    const cardBackgroundColor = useMemo(
        () => colors[Math.floor(Math.random() * colors.length)],
        [] // Ensures it only runs once per refresh
    );

    // Function to calculate days since job posting
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    };

    return (
        <div
            className="relative rounded-lg shadow-lg overflow-hidden bg-white flex flex-col justify-between"
            style={{
                border: '1px solid #e5e7eb', // Thin border
                borderBottomWidth: '16px', // Thick bottom white border
                borderColor: '#ffffff', // Polaroid effect
                maxWidth: '320px',
                backgroundColor: cardBackgroundColor, // Apply random background color
            }}
        >
            {/* Middle Colored Section */}
            <div
                className="flex flex-col p-3 rounded-lg relative"
                style={{
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Slight shadow
                    minHeight: '200px', // Ensures consistent minimum height
                    display: 'flex',
                    flexGrow: 1,
                }}
            >
                {/* Top Row: Date and Bookmark */}
                <div className="flex items-center justify-between mb-2">
                    <span
                        className="bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                        style={{ minWidth: '70px', textAlign: 'center' }}
                    >
                        {daysAgoFunction(job?.createdAt) === 0
                            ? 'Today'
                            : `${daysAgoFunction(job?.createdAt)}d ago`}
                    </span>
                    <Button
                        variant="outline"
                        className="rounded-full border-gray-400 hover:bg-gray-300"
                        size="icon"
                    >
                        <Bookmark className="text-gray-700" />
                    </Button>
                </div>

                {/* Company Name */}
                <div className="text-sm text-gray-500 font-medium mb-3">
                    {job?.company?.name}
                </div>

                {/* Job Title and Job Icon */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="font-bold text-lg text-gray-900">
                        {job?.title}
                    </h1>
                    <Avatar className="border-2 border-gray-300">
                        <AvatarImage
                            src={job?.company?.logo}
                            alt={job?.company?.name}
                        />
                    </Avatar>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                        className="text-blue-700 font-semibold py-1 px-3 rounded-full border border-gray-300"
                        style={{ background: 'transparent' }}
                    >
                        {job?.position} Positions
                    </Badge>
                    <Badge
                        className="text-red-700 font-semibold py-1 px-3 rounded-full border border-gray-300"
                        style={{ background: 'transparent' }}
                    >
                        {job?.jobType}
                    </Badge>
                </div>
            </div>

            {/* Bottom Section: Salary, Location, and Details */}
            <div
                className="flex justify-between items-center p-4 bg-gray-50"
                style={{
                    borderTop: '1px solid #e5e7eb', // Border between sections
                }}
            >
                <div>
                    <p className="text-sm text-black font-bold mt-1">
                        {job?.salary} LPA
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        {job.location || 'India'}
                    </p>
                </div>
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="border-black text-black hover:bg-gray-200 px-4 py-1 rounded-lg"
                >
                    Details
                </Button>
            </div>
        </div>
    );
};

export default Job;
