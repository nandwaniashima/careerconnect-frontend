import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-[#1a351f] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <h1 className="text-[#c8ff62]" onClick={() => navigate("/")}>Career<span className="text-white">Connect</span></h1>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center mr-[12%]">
          <ul className="flex font-medium space-x-8">
            {user && user.role === "recruiter" ? (
              <>
                <li className="hover:text-[#c8ff62] transition-colors">
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="hover:text-[#c8ff62] transition-colors">
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[#c8ff62] transition-colors">
                  <Link to="/home">Home</Link>
                </li>
                <li className="hover:text-[#c8ff62] transition-colors">
                  <Link to="/jobs">Job Listings</Link>
                </li>
                <li className="hover:text-[#c8ff62] transition-colors">
                  <Link to="/browse">Explore</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Authentication Buttons or Profile */}
        <div className="flex items-center gap-4">
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="text-[#1a351f] border-[#1a351f] hover:bg-[#a7e052] hover:text-white transition-all">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[white] text-[#1a351f] hover:bg-[#a7e052] transition-all">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="user-profile" />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72 bg-white text-gray-800 shadow-md rounded-lg p-4">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="w-16 h-16 border-2 border-gray-300 rounded-full">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="user-profile" />
                  </Avatar>
                  <h4 className="mt-2 text-lg font-semibold">{user?.fullname || "Full Name"}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {user?.profile?.bio || ""}
                  </p>
                </div>

                {/* Divider */}
                <hr className="my-3 border-gray-200" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  {user && user.role === "student" && (
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors"
                    >
                      <User2 className="text-blue-500" />
                      <span className="text-sm font-medium text-gray-700">View Profile</span>
                    </Link>
                  )}
                  <div
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors"
                    onClick={logoutHandler}
                  >
                    <LogOut className="text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Logout</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
