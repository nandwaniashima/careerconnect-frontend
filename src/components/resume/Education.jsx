import React from "react";

const Education = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border-4 border-white rounded-lg shadow-lg">
      {/* Card Header with Image */}
      <div className="mb-6">
        <img
          src="https://www.freevector.com/uploads/vector/preview/63077/vecteezyinclusive-workspace-diverse-office-or-workspace-illustrationAW0222_generated.jpg"
          alt="Booking"
          className="w-full h-65 rounded-t-lg object-cover"
        />
        <h2 className="text-center text-2xl mt-3">Let's put your qualifications into action!</h2>
        <p className="text-center mb-4">Education Details</p>
        <hr className="mb-4" />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Institute Fields */}
        <div className="flex flex-col">
          <label htmlFor="edu1_school" className="form-label text-gray-700">First Institute
          <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="edu1_school"
            placeholder="Enter your First Institute name"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu1_year" className="form-label text-gray-700">Graduation Year
          <span className="text-red-500">*</span></label>
          <input
            type="number"
            id="edu1_year"
            placeholder="Year you graduated"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu1_qualification" className="form-label text-gray-700">Degree
          <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="edu1_qualification"
            placeholder="Degree you pursued"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu1_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu1_desc" className="form-label text-gray-700">Description</label>
          <input
            type="text"
            id="edu1_desc"
            placeholder="Enter a short description"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>

        <hr className="mb-9" width="700px" />
        <br>
        </br>
        {/* Second Institute Fields */}
        <div className="flex flex-col">
          <label htmlFor="edu2_school" className="form-label text-gray-700">Second Institute</label>
          <input
            type="text"
            id="edu2_school"
            placeholder="Enter your Second Institute name"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu2_year" className="form-label text-gray-700">Graduation Year</label>
          <input
            type="text"
            id="edu2_year"
            placeholder="Year you graduated from your second institute"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu2_qualification" className="form-label text-gray-700">Degree</label>
          <input
            type="text"
            id="edu2_qualification"
            placeholder="Degree you pursued"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu2_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="edu2_desc" className="form-label text-gray-700">Description</label>
          <input
            type="text"
            id="edu2_desc"
            placeholder="Enter a short description"
            className="p-2 border-2 border-black rounded-md"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
