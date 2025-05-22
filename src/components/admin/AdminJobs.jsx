import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import { setSearchJobByText } from '@/redux/jobSlice';
import { Plus } from 'lucide-react'; // Importing the Plus icon
import Lottie from 'lottie-react';
import animationData2 from '../../assets/main3.json';

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div className="min-h-screen py-0 bg-gradient-to-br from-[#f6eed5] via-[#f2e8c5] to-[#edddab]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Header Section with Flexbox */}
        <div className="flex items-center justify-between mb-12">
          <div className="w-full max-w-2xl">
            <h2
              className="text-4xl font-extrabold text-gray-800 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Manage Your Jobs
            </h2>

            <p className="text-left text-md text-gray-600">
              Streamline your workflow by organizing and monitoring your job postings.
            </p>
          </div>

          {/* Lottie Animation on the right */}
          <div className="w-48">
            <Lottie
              animationData={animationData2}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '35vh' }}
            />
          </div>
        </div>

        

        {/* Search Bar and New Job Button */}
        <div className="flex items-center justify-between mb-10">
          <Input
            className="flex-grow max-w-sm p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="Search by Job Title, Company Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate('/admin/jobs/create')}
            className="flex items-center gap-2 bg-[#8d8864] text-white px-6 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#8d8864] hover:scale-105 transition-transform"
          >
            <Plus className="w-5 h-5" /> {/* Adding the "+" icon */}
            New Job
          </Button>
        </div>

        {/* Jobs Table */}
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
