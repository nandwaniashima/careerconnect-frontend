import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal, CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import animationData3 from "../../assets/recruiteranimation.json";
import Lottie from "lottie-react";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const [feedback, setFeedback] = useState("");
  const progressSteps = ["Shortlisted", "Assessment", "Interview", "Hired"];

  // State to track completed progress for each applicant
  const [completedProgress, setCompletedProgress] = useState({});

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status, feedback }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const updateProgressHandler = async (progress, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/progress/${id}/update`,
        { progress }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        // Mark the progress as completed for the specific applicant
        setCompletedProgress((prev) => ({
          ...prev,
          [id]: {
            ...(prev[id] || {}),
            [progress]: true,
          },
        }));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-[#edfbfd] min-h-screen py-6 px-4">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th colSpan="6" className="px-6 py-4">
                <div className="flex justify-center w-full">
                  <div className="w-48">
                    <Lottie
                      animationData={animationData3}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className="px-6 py-4 font-medium">Full Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Contact</th>
              <th className="px-6 py-4 font-medium">Resume</th>
              <th className="px-6 py-4 font-medium">Applied On</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applicants &&
              applicants.applications.map((item) => (
                <tr key={item._id} className="hover:bg-gray-200">
                  <td className="px-6 py-4">{item?.applicant?.fullname}</td>
                  <td className="px-6 py-4">{item?.applicant?.email}</td>
                  <td className="px-6 py-4">{item?.applicant?.phoneNumber}</td>
                  <td className="px-6 py-4">
                    {item.applicant?.profile?.resume ? (
                      <a
                        href={item.applicant.profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.applicant.profile.resumeOriginalName}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {item.applicant.createdAt.split("T")[0]}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-64 bg-white border border-gray-200 rounded shadow-lg p-4">
                        <div>
                          <label
                            htmlFor="feedback"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Feedback
                          </label>
                          <textarea
                            id="feedback"
                            rows="3"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Write feedback here..."
                          ></textarea>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">
                            Update Progress
                          </h4>
                          {progressSteps.map((step, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                updateProgressHandler(step, item._id)
                              }
                              className="w-full mt-1 px-4 py-2 flex items-center justify-between text-sm text-white bg-green-500 rounded hover:bg-green-600"
                            >
                              {step}
                              {completedProgress[item._id]?.[step] && (
                                <CheckCircle className="text-white ml-2" size={18} />
                              )}
                            </button>
                          ))}
                        </div>
                        {shortlistingStatus.map((status, index) => (
                          <button
                            key={index}
                            onClick={() => statusHandler(status, item._id)}
                            className="w-full mt-2 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            {status}
                          </button>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsTable;