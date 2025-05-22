import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers, FaBriefcase, FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {Link } from 'react-router-dom';




// Register necessary chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const UsersList = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [student, setStudent] = useState([]);
  const [recruiter, setRecruiter] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (role = null) => {
    try {
      const response = await axios.get("https://careerconnect-backend-oqa4.vercel.app//api/v1/user/all");
      const allUsers = response.data.users;
      setAllUsers(allUsers);

      const students = allUsers.filter((user) => user.role === "student");
      const recruiters = allUsers.filter((user) => user.role === "recruiter");

      setStudent(students);
      setRecruiter(recruiters);

      // Filter users based on role if specified
      if (role) {
        const filtered = role === "student" ? students : recruiters;
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(allUsers); // Show all users by default
      }
    } catch (error) {
      toast.error("Failed to fetch users!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("https://careerconnect-backend-oqa4.vercel.app/api/v1/company/getAllCompanies");
        setCompanies(response.data.companies);
      } catch (error) {
        toast.error("Failed to fetch companies!");
      }
    };

    const fetchApplications = async () => {
      try {
        const response = await axios.get("https://careerconnect-backend-oqa4.vercel.app/api/v1/application/getallapplications");
        setApplications(response.data.applications);
      } catch (error) {
        toast.error("Failed to fetch applications!");
      }
    };

    fetchUsers(); // Fetch all users initially
    fetchCompanies();
    fetchApplications();
  }, []);

  const pieData = {
    labels: ["Job Seeker", "Employers"],
    datasets: [
      {
        label: "Users Comparison",
        data: [student.length, recruiter.length],
        backgroundColor: ["#4F46E5", "#A855F7"],
        hoverBackgroundColor: ["#4338CA", "#9333EA"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-gray-100 mt-[4%]">
      <ToastContainer />
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-semibold border-b border-gray-200 flex items-center space-x-3">
          <span className="text-blue-500">&#x1F393;</span>
          <span>Control Panel</span>
        </div>
        <nav className="mt-6 space-y-2">
          {["Dashboard", "User Management", "Reports & Analytics", "Course Management", "Messages", "Settings", "Log out"].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition ${
                item === "Dashboard" && "bg-blue-50 text-blue-500 font-medium"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Admin Workspace</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <Link to="/"><FaUserCircle className="text-gray-500 text-3xl" /></Link>
          </div>
        </header>

        {/* Display the counts in a row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            className="p-4 rounded-lg shadow-md bg-blue-100 text-blue-700 cursor-pointer"
            onClick={() => fetchUsers("student")}
          >
            <p className="text-sm font-medium">Job Seekers</p>
            <h2 className="text-2xl font-bold mt-2">{student.length}</h2>
          </div>

          <div
            className="p-4 rounded-lg shadow-md bg-purple-100 text-purple-700 cursor-pointer"
            onClick={() => fetchUsers("recruiter")}
          >
            <p className="text-sm font-medium">Recruiters</p>
            <h2 className="text-2xl font-bold mt-2">{recruiter.length}</h2>
          </div>

          <div className="p-4 rounded-lg shadow-md bg-green-100 text-green-700">
            <p className="text-sm font-medium">Companies</p>
            <h2 className="text-2xl font-bold mt-2">{companies.length}</h2>
          </div>

          <div className="p-4 rounded-lg shadow-md bg-teal-100 text-teal-700">
            <p className="text-sm font-medium">Applications</p>
            <h2 className="text-2xl font-bold mt-2">
              {applications.length > 0 ? applications.length : "No applications"}
            </h2>
          </div>
        </div>

        {/* User List Section
        <div>
          <h3 className="text-lg font-bold">Filtered Users</h3>
          <ul className="mt-4 space-y-2">
            {filteredUsers.map((user) => (
              <li key={user._id} className="p-2 border rounded-md shadow-sm">
                {user.fullname} - {user.role}
              </li>
            ))}
          </ul>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6 h-[60vh] w-[60vh]">
            <h3 className="text-lg font-bold">Users</h3>
            <div className="flex justify-center items-center h-48">
              <div className="w-60 h-60 mt-[31%]">
                <Pie data={pieData} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-[45vw] h-[60vh] ml-[-20%] overflow-y-auto">
            <h3 className="text-lg font-bold">User Details</h3>
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="border border-gray-300 px-4 py-2">{user.fullname}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersList;