import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import anim from "../../assets/main1.json";
import Lottie from 'lottie-react';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,  { companyName: companyName.trim() }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value.trimStart(); // Prevent leading spaces
        if (value.length <= 30) {
            setCompanyName(value); // Allow up to 30 characters
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 justify-center items-center ml-[12%] ">
                {/* Left: Form Section */}
                <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-xl my-12">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center font-poppins">Set Your Company Name</h1>
                    <p className="text-gray-600 text-center mb-6 font-inter">What would you like to name your company? You can always change it later.</p>

                    <div className="mb-6">
                        <Label className="text-lg font-medium text-gray-700 font-inter">Company Name</Label>
                        <Input
                            type="text"
                            className="my-2 p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="JobHunt, Microsoft etc."
                        value={companyName}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex justify-between gap-4">
                        <Button variant="outline" onClick={() => navigate("/admin/companies")} className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors font-inter">Cancel</Button>
                        <Button onClick={registerNewCompany} className="px-6 py-2 bg-[#8d659a] text-white rounded-lg hover:bg-[#8d659a] hover:scale-105 transition-colors font-poppins">Continue</Button>
                    </div>
                </div>

                {/* Right: Animation Section */}
                <div className="hidden md:block w-1/2">
                    <Lottie 
                        animationData={anim} 
                        loop={true} 
                        autoplay={true} 
                        style={{ width: "80%", height: "auto" }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
