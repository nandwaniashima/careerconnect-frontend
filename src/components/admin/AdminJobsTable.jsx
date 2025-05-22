import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="bg-gradient-to-r from-[#edddab] via-[#f2e8c5] to-[#f6eed5] min-h-screen p-8">
      <h2 className="text-4xl font-bold text-gray-800 text-left mb-12">Jobs Recently Posted</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filterJobs?.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 relative"
          >
            {/* Company Name */}
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{job?.company?.name}</h3>
              <Popover>
                <PopoverTrigger>
                  <div className="text-gray-600 cursor-pointer">
                    <MoreHorizontal className="w-6" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-36 bg-white shadow-md rounded-lg p-2">
                  <div
                    onClick={() => navigate(`/admin/companies/${job._id}`)}
                    className="flex items-center gap-2 px-2 py-2 hover:bg-blue-100 rounded-md cursor-pointer transition-colors"
                  >
                    <Edit2 className="w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">Edit</span>
                  </div>
                  <div
                    onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                    className="flex items-center gap-2 px-2 py-2 hover:bg-blue-100 rounded-md cursor-pointer transition-colors mt-2"
                  >
                    <Eye className="w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">View Applicants</span>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Job Title */}
            <p className="text-xl font-bold font-small text-gray-700 mt-4">{job?.title}</p>

            {/* Date Posted */}
            <p className="text-sm text-gray-500 mt-2">{job?.createdAt.split('T')[0]}</p>

            {/* Hover Effect */}
            <div className=" transition-opacity duration-300 bg-gray-200 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminJobsTable;

