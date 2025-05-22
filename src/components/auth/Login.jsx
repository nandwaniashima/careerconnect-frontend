import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2, Eye, EyeOff } from "lucide-react";
import "@fontsource/roboto";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    secretKey: "",
  });
  
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isAdmin, setIsAdmin]=useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    if (name === "role" && value === "recruiter") {
      setIsRecruiter(true);
      setIsStudent(false);
      setIsAdmin(false);
    } else if (name === "role" && value === "student") {
      setIsStudent(true);
      setIsRecruiter(false);
      setIsAdmin(false);
    }
    else if  (name === "role" && value === "admin") {
     setIsAdmin(true);
     setIsRecruiter(false);
     setIsStudent(false);
    }
  };

    const submitHandler = async (e) => {
    e.preventDefault();

   
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        const redirectPath = input.role === "admin" ? "/supervisor/dashboard" : "/home";
        navigate(redirectPath);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/home");
  //   }
  // }, [user, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col font-roboto bg-gray-100">
      <div className="flex flex-1 flex-col md:flex-row">
        <div
          className={`w-full md:w-7/12 h-64 md:h-screen relative overflow-hidden transition-all duration-500 ${
                isRecruiter
              ? "bg-gradient-to-r from-teal-500 to-teal-700"
              : isStudent
              ? "bg-gradient-to-t from-[#fff1eb] to-[#ace0f9]"
              : isAdmin
              ? "bg-black"
              : "bg-gradient-to-r from-gray-800 to-gray-700"
          }`}
        >
          <video
            className="hidden md:block w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div
          className={`w-full md:w-5/12 flex items-center justify-center transition-all duration-500 ${
              isRecruiter
              ? "bg-gray-800 text-gray-700"
              : isStudent
              ? "bg-gradient-to-t from-[#fff1eb] to-[#ace0f9] text-gray-700"
              : isAdmin
              ? "bg-gray-300"
              : "bg-white"
          }`}
        >
          <div className="w-full max-w-md p-6 md:p-10 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Login
            </h2>
            <p className="text-center mb-6 text-sm md:text-base text-gray-500">
              Welcome Back! Please enter your details.
            </p>

            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="name@example.com"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mb-4 relative">
                <Label>Password</Label>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Enter Your Password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {input.password && (
                  <div
                    className="absolute right-4 bottom-2 mt-[-7%] cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </div>
                )}
              </div>


            {input.role === "admin" && (
            <div className="mb-4 relative" >
            <label>Admin Secret Key</label>
            <input
            type="password"
            name="secretKey"
            value={input.secretKey}
            onChange={changeEventHandler}
            placeholder="Enter Admin Secret Key"
            className="mt-1 block w-full px-2 py-2 border rounded-md shadow-sm  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      )}

              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">Select Role</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <label
                    className={`flex items-center justify-center px-4 py-2 border rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium ${
                      input.role === "student"
                        ? "bg-indigo-500 text-white border-indigo-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                      className="hidden"
                    />
                    Job Seeker
                  </label>

                  <label
                    className={`flex items-center justify-center px-4 py-2 border rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium ${
                      input.role === "recruiter"
                        ? "bg-teal-500 text-white border-teal-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="hidden"
                    />
                    Recruiter
                  </label>

                  <label
                    className={`flex items-center justify-center px-4 py-2 border rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium ${
                      input.role === "admin"
                        ? "bg-gray-500 text-white border-gray-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <Input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={input.role === "admin"}
                      onChange={changeEventHandler}
                      className="hidden"
                    />
                    Admin
                  </label>
                </div>
              </div>


  

              

              {loading ? (
                <Button className="w-full my-3 bg-gray-300">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className={`w-full my-3 text-white shadow-md transition ${
                    isRecruiter
                      ? "bg-gradient-to-r from-teal-500 to-teal-700"
                      : isStudent
                      ? "bg-black"
                      : "bg-gradient-to-r from-indigo-500 to-blue-600"
                  }`}
                >
                  Login
                </Button>
              )}

              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;