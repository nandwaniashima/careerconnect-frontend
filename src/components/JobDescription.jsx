import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Lottie from 'lottie-react';
import desc from "../assets/main2.json";

const JobDescription = () => {
    const { singleJob } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.auth);
    const isInitiallyApplied =
        singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true); // Update the local state
                const updatedSingleJob = {
                    ...singleJob,
                    applications: [...singleJob.applications, { applicant: user?._id }],
                };
                dispatch(setSingleJob(updatedSingleJob)); // Helps us to real-time UI update
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(
                        res.data.job.applications.some((application) => application.applicant === user?._id)
                    ); // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="max-w-7xl mx-auto my-10 p-8 bg-[#E0E8F9] shadow-lg rounded-lg">
            {/* Header Section with Animation */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#4F46E5] to-[#5F32AD] p-10 rounded-lg shadow-lg text-white mb-8">
                <div className="text-left">
                    <h1 className="text-5xl font-extrabold leading-tight">Job Description</h1>
                    <p className="text-sm mt-3 text-gray-300">Check out the details and submit your application</p>
                </div>
                <div className="w-1/6 hidden md:block">
                    <Lottie animationData={desc} loop={true} autoplay={true} style={{ width: '100%' ,height:"150px"}}/>
                </div>
            </div>

            {/* Job Details Table */}
            <div className="border rounded-lg shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="bg-[#F1F5F9] transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Job Title</td>
                            <td className="px-6 py-4 text-[#2D2D72] font-medium">{singleJob?.title}</td>
                        </tr>
                        <tr className="transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Location</td>
                            <td className="px-6 py-4">{singleJob?.location}</td>
                        </tr>
                        <tr className="bg-[#F1F5F9] transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Experience</td>
                            <td className="px-6 py-4">{singleJob?.experienceLevel} years</td>
                        </tr>
                        <tr className="transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Salary</td>
                            <td className="px-6 py-4">{singleJob?.salary} LPA</td>
                        </tr>
                        <tr className="bg-[#F1F5F9] transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Total Applicants</td>
                            <td className="px-6 py-4">{singleJob?.applications?.length}</td>
                        </tr>
                        <tr className="transition-transform duration-300 transform hover:scale-[1.02]">
                            <td className="px-6 py-4 font-medium text-gray-600">Posted Date</td>
                            <td className="px-6 py-4">{singleJob?.createdAt?.split('T')[0]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Job Description Section */}
            <div className="my-8">
                <h2 className="text-2xl font-bold text-[#2D2D72]">Job Description</h2>
                <p className="mt-4 text-gray-700">{singleJob?.description}</p>
            </div>

            {/* Role and Responsibilities */}
            <div className="my-8">
                <h2 className="text-2xl font-bold text-[#2D2D72]">Role & Responsibilities</h2>
                <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Collaborate with cross-functional teams to ensure efficient workflow and meet project deadlines.</li>
                    <li>Maintain and update project documentation and reports on a regular basis.</li>
                    <li>Ensure adherence to company policies, quality standards, and best practices.</li>
                    <li>Troubleshoot and resolve technical issues, providing timely solutions.</li>
                </ul>
            </div>

            {/* Apply Button */}
            <div className="text-center mt-10">
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg py-2 px-4 text-white ${
                        isApplied
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#4F46E5] to-[#5F32AD] hover:scale-110 hover:shadow-lg'
                    }`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
        </div>
    );
};

export default JobDescription;