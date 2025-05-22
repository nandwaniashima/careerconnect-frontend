import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import { USER_API_END_POINT } from '@/utils/constant';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import axios from 'axios';
import { setUser } from "@/redux/authSlice"; // Adjust the path as needed


const Profile = () => {
    
    useGetAppliedJobs();
    const { user } = useSelector((store) => store.auth);
    const [open, setOpen] = useState(false);
    const [resumeFile, setResumeFile] = useState({resumeFile: user?.profile?.resume || ""})
    

    const handleResumeChange = (event) => {
        setResumeFile(event.target.files[0]);
    };

    const handleResumeUpload = async () => {
        if (!resumeFile) {
            alert("Please choose a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', resumeFile);

        try {
            const res=await axios.post(`${USER_API_END_POINT}/profile/updateResume`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            if (res.data.success) {
                alert("Resume uploaded successfully!");
                dispatch(setUser(response.data.user)); // Update user state
            } else {
                alert(res.data.message || "Failed to upload resume.");
            }
        } catch (error) {
            console.error("Error uploading resume:", error);
            alert("Error uploading resume.");
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto mt-8">
                {/* Profile Banner */}
                <div className="relative bg-gradient-to-r from-[#A7BEAE] to-[#20948B] h-40 rounded-t-2xl">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-8 flex items-center gap-4">
                        <Avatar className="h-28 w-28 shadow-lg border-4 border-white">
                            <AvatarImage src={user?.profile?.profilePhoto} alt="user-profile" />
                        </Avatar>
                        <div>
                            <h1 className="text-white font-bold text-3xl">{user?.fullname}</h1>
                            <p className="text-gray-200">{user?.profile?.bio || "No bio available"}</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setOpen(true)}
                        className="absolute top-4 right-4 bg-white text-gray-700 hover:bg-gray-100 p-2 rounded-full shadow"
                    >
                        <Pen />
                    </Button>
                </div>

                {/* Content Section */}
                <div className="bg-white shadow-lg rounded-b-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                                {/* Contact Details */}
                                <div>
                                    <h2 className="font-bold text-lg text-gray-800">Contact Info</h2>
                                    <div className="space-y-4 mt-4">
                                        <div className="flex items-center gap-4">
                                            <Mail className="text-gray-600" />
                                            <span className="text-gray-800">{user?.email || "Not provided"}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Contact className="text-gray-600" />
                                            <span className="text-gray-800">{user?.phoneNumber || "Not provided"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                                {/* Skills */}
                                <div>
                                    <h2 className="font-bold text-lg text-gray-800">Skills</h2>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {user?.profile?.skills?.length ? (
                                            user.profile.skills.map((item, index) => (
                                                <Badge
                                                    key={index}
                                                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
                                                >
                                                    {item}
                                                </Badge>
                                            ))
                                        ) : (
                                            <span className="text-gray-600">NA</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                                {/* Resume */}
                                <div>
                                    <h2 className="font-bold text-lg text-gray-800">Resume</h2>
                                    <div className="mt-4">
                                        {user?.profile?.resume ? (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={user?.profile?.resume}
                                                className="text-blue-600 hover:underline"
                                            >
                                                {user?.profile?.resumeOriginalName || "View Resume"}
                                            </a>
                                        ) : (
                                            <span className="text-gray-600">No resume uploaded</span>
                                        )}
                                    </div>
                                    {/* Resume Upload Section */}
                                    <input
                                        type="file"
                                        onChange={handleResumeChange}
                                        className="mt-4"
                                        id="file"
                                        name="file"
                                        accept=".pdf"
                                    />
                                    <Button
                                        onClick={handleResumeUpload}
                                        className="mt-2 bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Upload Resume
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-span-2">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h2 className="font-bold text-xl text-gray-800 mb-4">Applied Jobs</h2>
                                <AppliedJobTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Profile Dialog */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
