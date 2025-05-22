import React from "react";

const Experiences = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border-4 border-white rounded-lg shadow-lg">
      {/* Card Header with Image */}
      <div className="mb-6">
        <img
          src="https://www.freevector.com/uploads/vector/preview/40255/People_Business_Character_With_Activities.jpg"
          alt="Experience"
          className="w-full h-65 rounded-t-lg object-cover"
        />
        <h2 className="text-center text-2xl mt-3">Career Milestones</h2>
        <p className="text-center mb-4">Experience Details</p>
        <hr className="mb-4" />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Experience Fields */}
        <div className="flex flex-col">
          <label htmlFor="exp1_org" className="form-label text-gray-700">First Company</label>
          <input
            type="text"
            id="exp1_org"
            placeholder="Enter your first company name you worked for"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp1_org}
            onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp1_pos" className="form-label text-gray-700">Position</label>
          <input
            type="text"
            id="exp1_pos"
            placeholder="What was your designation?"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp1_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp1_dur" className="form-label text-gray-700">Duration</label>
          <input
            type="text"
            id="exp1_dur"
            placeholder="How many years you worked there?"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp1_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp1_desc" className="form-label text-gray-700">Job Description</label>
          <input
            type="text"
            id="exp1_desc"
            placeholder="Tell us about your job description"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp1_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value });
            }}
          />
        </div>

        <hr className="mb-9" width="700px" />
        <br></br>
        {/* Second Experience Fields */}
        <div className="flex flex-col">
          <label htmlFor="exp2_org" className="form-label text-gray-700">Second Company</label>
          <input
            type="text"
            id="exp2_org"
            placeholder="Enter your second company name"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp2_org}
            onChange={(e) => {
              setFormData({ ...formData, exp2_org: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp2_pos" className="form-label text-gray-700">Position</label>
          <input
            type="text"
            id="exp2_pos"
            placeholder="What was your designation?"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp2_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp2_pos: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp2_dur" className="form-label text-gray-700">Duration</label>
          <input
            type="text"
            id="exp2_dur"
            placeholder="How many years you worked there?"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp2_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp2_dur: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="exp2_desc" className="form-label text-gray-700">Job Description</label>
          <input
            type="text"
            id="exp2_desc"
            placeholder="Tell us about your job description"
            className="p-2 border-2 border-black rounded-md"
            value={formData.exp2_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Experiences;
