import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registered Companies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterCompany?.map((company) => (
          <div
            key={company._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-[#8d659a]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={company.logo} alt={`${company.name} logo`} />
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{company.name}</h3>
                  <p className="text-xs text-gray-500">{company.createdAt.split("T")[0]}</p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="w-32 bg-gray-50 shadow-md rounded-lg p-2">
                  <div
                    onClick={() => navigate(`/admin/companies/${company._id}`)}
                    className="flex items-center gap-2 px-2 py-2 hover:bg-purple-100 rounded-md cursor-pointer transition-colors"
                  >
                    <Edit2 className="w-4 text-purple-600" />
                    <span className="text-xs font-medium text-gray-700">Edit</span>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesTable;
