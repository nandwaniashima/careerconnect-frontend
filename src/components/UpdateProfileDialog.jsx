import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [bioError, setBioError] = useState("");
  const [skillsError, setSkillsError] = useState("");

  const navigate = useNavigate();

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: user?.profile?.resume || "",
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    if (name === "fullname") {
      const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
      if (!nameRegex.test(value)) {
        setNameError("Please enter a valid name");
      } else {
        setNameError("");
      }
    }

    if (name === "phoneNumber") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        setNumberError("Please enter a valid mobile number");
      } else {
        setNumberError("");
      }
    }

    if (name === "bio") {
      const bioRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
      if (!bioRegex.test(value)) {
        setBioError("Please enter valid details");
      } else {
        setBioError("");
      }
    }

    if (name === "skills") {
      const skillRegex = /^[a-zA-Z]+(,\s*[a-zA-Z]+)*$/;

      if (!skillRegex.test(value)) {
        setSkillsError("Please enter your skills (comma-separated words)");
      } else {
        setSkillsError("");
      }
    }
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (nameError || numberError || bioError || skillsError) {
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file && input.file !== user?.profile?.resume) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
    setOpen(false); // Close the dialog
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-indigo-50 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-extrabold text-indigo-600">Edit Profile</DialogTitle>
          <p className="text-gray-500 text-sm mt-1">Update your profile details below.</p>
        </DialogHeader>

        <button
          className="absolute top-3 right-4 text-indigo-600 hover:text-indigo-800 transition-all"
          onClick={() => {
            setOpen(false);
            navigate("/profile");
          }}
        >
          ✕
        </button>

        <form onSubmit={submitHandler} className="space-y-6 mt-6">
          <div>
            <Label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              value={input.fullname}
              onChange={changeEventHandler}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500"
            />
            {nameError && <div className="text-red-500 text-sm mt-1">{nameError}</div>}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500"
            />
            {numberError && <div className="text-red-500 text-sm mt-1">{numberError}</div>}
          </div>

          <div>
            <Label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              About Me
            </Label>
            <textarea
              id="bio"
              name="bio"
              type="text"
              value={input.bio}
              onChange={changeEventHandler}
              rows="4"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500"
            />
            {bioError && <div className="text-red-500 text-sm mt-1">{bioError}</div>}
          </div>

          <div>
            <Label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills (comma seperated format)
            </Label>
            <Input
              id="skills"
              name="skills"
              type="text"
              value={input.skills}
              onChange={changeEventHandler}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500"
            />
            {skillsError && <div className="text-red-500 text-sm mt-1">{skillsError}</div>}
          </div>

          <div>
            <Label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Profile Photo
            </Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept=".pdf"
              onChange={fileChangeHandler}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-semibold ${
                loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              } transition-all`}
              disabled={loading}
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;