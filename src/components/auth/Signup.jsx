import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import "@fontsource/roboto";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError]=useState("");
  const [numberError, setNumberError] = useState("");
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    if (name === "role" && value === "recruiter") {
      setIsRecruiter(true);
      setIsStudent(false);
    } else if (name === "role" && value === "student") {
      setIsStudent(true);
      setIsRecruiter(false);
    }


    if (name === "fullname") {
      const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/; 
      if (!nameRegex.test(value)) {
        setNameError("Please enter a valid name");
      } else {
        setNameError("");
      }
    }

    if (name === "email") {
      const trimmedValue = value.trim(); // Trim leading and trailing spaces
      setInput((prev) => ({ ...prev, [name]: trimmedValue })); // Update input state with trimmed value
      
      const emailRegex = /^[^\s][a-zA-Z0-9._-]*@(gmail\.com|chitkara\.edu\.in|icloud\.com|yahoo\.com)$/;
      if (!emailRegex.test(trimmedValue)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  
    setInput((prev) => ({ ...prev, [name]: value }));

    if (name === "phoneNumber") {
      const phoneRegex = /^[0-9]{10}$/;

      if (!phoneRegex.test(value)) {
        setNumberError("Please enter a valid mobile number");
      } else {
        setNumberError("");
      }
    }

    if (name === "password") {
      const passwordRegex = /^.{8,30}$/; 
      if (!passwordRegex.test(value)) {
        setPasswordError("Password must be between 8 to 30 characters long.");
      } else {
        setPasswordError("");
      }
    }
   
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0] || "";
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (fileExtension !== "png" && fileExtension !== "jpg" && fileExtension !== "jpeg") {
        setErrorMessage("Please upload a picture in PNG or JPG format.");
        setInput((prev) => ({ ...prev, file: "" })); // Reset the file if invalid
        return;
      }
    }
    setErrorMessage(""); // Clear error message if valid
    setInput((prev) => ({ ...prev, file })); // Update file if valid
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role){
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if(!input.file){
      setErrorMessage("Please upload a picture in PNG or JPG format.");
      return;
    }

    if(nameError){
      setErrorMessage("Please enter a valid name.");
      return;
    }

    if (emailError) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (numberError) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if(passwordError){
      setErrorMessage("Please enter a valid password.")
    }



    setErrorMessage("");

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <div className="flex flex-1">
        {/* Hero Section */}
        <div
          className={`w-full md:w-7/12 relative h-screen overflow-hidden transition-all duration-500 ${
            isRecruiter
              ? "text-teal-400"
              : isStudent
              ? "text-[#AEC6CF]"
              : "text-gray-800"
          }`}
          style={{
            backgroundImage: "linear-gradient(45deg, #B5EAEA 0%, #D7DFF7 100%)",
          }}
        >
          <video
            className="w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Signup Form */}
        <div
          className={` md:w-5/12 min-h-screen flex items-center justify-center transition-all duration-500 ${
            isRecruiter
              ? "bg-gray-700 text-black"
              : isStudent
              ? "bg-gradient-to-t from-[#d299c2] to-[#fef9d7]"
              : "bg-white"
          }`}
        >
          <div className="w-full h-full max-w-md p-4 rounded-lg shadow-lg bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
              Sign Up
            </h2>

            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
            )}

            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <Label>Full Name</Label>
                <Input
                  type="text"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  placeholder="Enter Your Name"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
                {nameError && (
                  <div className="text-red-500 text-sm mt-1">{nameError}</div>
                )}
              </div>

              <div className="mb-3">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="name@example.com"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
                {emailError && (
                  <div className="text-red-500 text-sm mt-1">{emailError}</div>
                )}
              </div>

              <div className="mb-3">
                <Label>Phone Number(+91)</Label>
                <Input
                  type="number"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="Enter Your Phone Number"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
                {numberError && (
                  <div className="text-red-500 text-sm mt-1">{numberError}</div>
                )}
              </div>

              <div className="mb-3 relative">
                <Label>Password</Label>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Enter Your Password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
               
                {input.password && (
                  <div
                    className="absolute right-6 mt-[-7%] cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </div>
                )}
                {passwordError && (
                  <div className="text-red-500 text-sm mt-1">{passwordError}</div>
                )}
              </div>

              <div className="mb-3">
                <Label>Role</Label>
                <select
                  name="role"
                  value={input.role}
                  onChange={changeEventHandler}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                >
                  <option value="">Select Role</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="student">Job Seeker</option>
                </select>
              </div>

              <div className="mb-3">
                <Label>Profile Picture</Label>
                <Input
                  type="file"
                  name="file"
                  onChange={changeFileHandler}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
              </div>

              <div className="mb-3 flex justify-between items-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
                </Button>
              </div>

              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-500 underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;