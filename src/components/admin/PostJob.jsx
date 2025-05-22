import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Lottie from 'lottie-react';
import postjobAnimation from "../../assets/postjob.json"; // Ensure this path is correct

const PostJob = () => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    jobType: '',
    experience: '',
    position: 0,
    companyId: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  // Change event handler with validation for negative or zero values
  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    // Convert value to number for numeric fields
    const numericFields = ['experience', 'salary', 'position'];
    const numericValue = numericFields.includes(name) ? parseInt(value, 10) : value;

    // Validation for positive integers
    if (numericFields.includes(name) && numericValue < 0) {
      toast.error(`Please enter a positive integer in the ${name} field`);
      return;
    }

    setInput({ ...input, [name]: value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
    setInput({ ...input, companyId: selectedCompany._id });
  };

  // Validation logic
  const validateInput = () => {
    const { title, description, salary, location, experience, position, jobType, requirements, companyId } = input;

    if (!/^[A-Za-z\s]+$/.test(title.trim())) {
      toast.error('Job title should contain only alphabets and spaces.');
      return false;
    }
    

    if (description.trim().length > 1000 || description.trim() === '') {
      toast.error('Description must be non-empty and not exceed 1000 characters.');
      return false;
    }

    if (!/^[A-Za-z\s.,!?()]+$/.test(requirements.trim()) || requirements.trim().length > 1000 || requirements.trim() === '') {
      toast.error('Requirements must be non-empty, not exceed 1000 characters, and contain only valid characters.');
      return false;
    }

    if (!/^[1-9][0-9]?$|^100$/.test(salary.trim())) {
      toast.error('Salary must be a positive integer between 1 and 100.');
      return false;
    }

    if (!/^[A-Za-z]+$/.test(location.trim())) {
      toast.error('Location should contain only alphabets.');
      return false;
    }

    if (!['full-time', 'part-time', 'hybrid'].includes(jobType)) {
      toast.error('Please select a valid job type.');
      return false;
    }

    if (!/^([0-9]|[1-7][0-9]|80)$/.test(experience.trim())) {
      toast.error('Experience must be a number between 0 and 80.');
      return false;
    }

    if (!/^[1-9][0-9]?$|^100$/.test(position.toString().trim())) {
      toast.error('Number of positions must be a positive integer between 1 and 100.');
      return false;
    }

    if (!companyId) {
      toast.error('Select company');
      return false;
    }

    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateInput()) return; // Stop if validation fails

    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/admin/jobs');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f6eed5] via-[#f2e8c5] to-[#edddab] min-h-screen relative">
      <Navbar />
      {/* Subtle Overlay Pattern */}
      <div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="max-w-5xl mx-auto py-10 px-6 relative z-10">
        {/* Page Header with Flexbox */}
        <div className="flex items-center justify-between mb-10">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold text-black">Post a New Job</h1>
            <p className="text-gray-500 mt-2">
              Fill out the form below to post a job and attract the right candidates.
            </p>
          </div>

          {/* Lottie Animation on the right */}
          <div className="w-48">
            <Lottie
              animationData={postjobAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={submitHandler}>
            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Input Fields */}
              <div>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter job title"
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter job description"
                />
              </div>
              <div>
                <Label>Requirements</Label>
                <Input
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter job requirements"
                />
              </div>
              <div>
                <Label>Salary (LPA)</Label>
                <Input
                  type="number"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter salary range"
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter job location"
                />
              </div>
              <div>
                <Label>Job Type</Label>
                <Select onValueChange={(value) => setInput({ ...input, jobType: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Experience Level (In Years)</Label>
                <Input
                  type="number"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter Experience Level"
                />
              </div>
              <div>
                <Label>Number of Positions</Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  className="my-1"
                  placeholder="Enter number of positions"
                />
              </div>
              {/* Company Selector */}
              {companies.length > 0 && (
                <div className="sm:col-span-2">
                  <Label>Company</Label>
                  <Select onValueChange={selectChangeHandler}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {companies.map((company) => (
                          <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                            {company?.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : 'Post Job'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;