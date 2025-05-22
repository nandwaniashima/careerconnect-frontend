import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import useGetCompanyById from '@/hooks/useGetCompanyById';

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: '',
    description: '',
    website: '',
    location: '',
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInput = () => {
    if (!input.name.trim()) {
      toast.error('Company name is required.');
      return false;
    }
    if (!input.description.trim() || input.description.length > 1000) {
      toast.error('Description is required and must not exceed 1000 characters.');
      return false;
    }
    const websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._~:\/?#\[\]@!$&'()+,;=-])?$/;

    if (!input.website.trim() || !websiteRegex.test(input.website)) {
      toast.error('Please enter a valid website URL.');
      return false;
    }
    const locationRegex = /^[A-Za-z\s]+$/;
    if (!input.location.trim() || !locationRegex.test(input.location)) {
      toast.error('Location should only contain alphabets.');
      return false;
    }

    if(!input.file){
      toast.error('Please upload company logo');
      return false;
    }

    if (input.file) {
      const validFormats = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!validFormats.includes(input.file.type)) {
        toast.error('Logo must be in PNG, JPG, or JPEG format.');
        return false;
      }
    }
     return true;
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    const formData = new FormData();
    formData.append('name', input.name.trim());
    formData.append('description', input.description.trim());
    formData.append('website', input.website.trim());
    formData.append('location', input.location.trim());
    if (input.file) {
      formData.append('file', input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/admin/companies');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || '',
      description: singleCompany.description || '',
      website: singleCompany.website || '',
      location: singleCompany.location || '',
      file: singleCompany.file,
    });
  }, [singleCompany]);

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-between mb-10">
            <Button
              onClick={() => navigate('/admin/companies')}
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white rounded-lg p-3 hover:bg-white hover:text-gray-800 transition duration-300"
            >
              <ArrowLeft />
              Back
            </Button>
            <h1 className="text-4xl font-extrabold text-white tracking-wide">Edit Company</h1>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={submitHandler}>
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-lg font-semibold font-serif text-gray-700">Company Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={changeEventHandler}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 text-black focus:ring-pink-500"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <Label className="block text-lg font-semibold font-serif text-gray-700">Description</Label>
                    <Input
                      type="text"
                      name="description"
                      value={input.description}
                      onChange={changeEventHandler}
                      className="w-full p-4 border-2 border-gray-300 text-black rounded-xl focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter company description"
                    />
                  </div>

                  <div>
                    <Label className="block text-lg font-semibold font-serif text-gray-700">Website</Label>
                    <Input
                      type="text"
                      name="website"
                      value={input.website}
                      onChange={changeEventHandler}
                      className="w-full p-4 border-2 border-gray-300 text-black rounded-xl focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter company website"
                    />
                  </div>

                  <div>
                    <Label className="block text-lg font-semibold font-serif text-gray-700">Location</Label>
                    <Input
                      type="text"
                      name="location"
                      value={input.location}
                      onChange={changeEventHandler}
                      className="w-full p-4 border-2 border-gray-300 text-black rounded-xl focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter company location"
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-lg font-semibold font-serif text-gray-700">Upload Logo</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={changeFileHandler}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="mt-10">
                {loading ? (
                  <Button
                    type="submit"
                    className="w-full p-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-white text-lg font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <Loader2 className="animate-spin" />
                    Updating...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full p-4 bg-gradient-to-r hover:scale-105 from-gray-200 via-gray-300 to-gray-400 text-white text-lg font-bold rounded-xl hover:bg-red-500 transition-all duration-300"
                  >
                    Update Company
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;