import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";
import { Search, PlusCircle } from "lucide-react";
import company from "../../assets/company.json";

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md w-3/4 mx-auto">
          <div className="relative w-2/3">
            <Input
              className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Filter by name"
              onChange={(e) => setInput(e.target.value)}
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            className="flex items-center gap-2 bg-[#8d659a] text-white hover:shadow-lg hover:scale-105 hover:bg-[#8d659a] transform transition-all rounded-md px-6 py-2"
            onClick={() => navigate("/admin/companies/create")}
          >
            <PlusCircle className="w-5 h-5" />
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
