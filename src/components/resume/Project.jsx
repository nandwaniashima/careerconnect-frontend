import React from "react";

const Project = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border-4 border-white rounded-lg shadow-lg">
      {/* Card Header with Image */}
      <div className="mb-6">
        <img
          src="https://www.freevector.com/uploads/vector/preview/48173/vecteezypeople-activity-collaboration-professional-character-illustrationAW0821_generated.jpg"
          alt="Projects"
          className="w-full h-65 rounded-t-lg object-cover"
        />
        <h2 className="text-center text-2xl mt-3">Highlight Your Accomplishments</h2>
        <p className="text-center mb-4">Project Details</p>
        <hr className="mb-4" />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Project */}
        <div className="flex flex-col">
          <label htmlFor="proj1_title" className="form-label text-gray-700">First Project
          <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="proj1_title"
            placeholder="Name of First Project"
            className="p-2 border-2 border-black rounded-md"
            value={formData.proj1_title}
            onChange={(e) => {
              setFormData({ ...formData, proj1_title: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="proj1_link" className="form-label text-gray-700">Link
          <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="proj1_link"
            placeholder="Link to First Project"
            className="p-2 border-2 border-black rounded-md"
            value={formData.proj1_link}
            onChange={(e) => {
              setFormData({ ...formData, proj1_link: e.target.value });
            }}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="proj1_desc" className="form-label text-gray-700">Description</label>
          <input
            type="text"
            id="proj1_desc"
            placeholder="Short Description about First Project"
            className="p-2 border-2 border-black rounded-md w-full"
            value={formData.proj1_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj1_desc: e.target.value });
            }}
          />
        </div>

        <hr className="my-6 col-span-2" />

        {/* Second Project */}
        <div className="flex flex-col">
          <label htmlFor="proj2_title" className="form-label text-gray-700">Second Project</label>
          <input
            type="text"
            id="proj2_title"
            placeholder="Name of Second Project"
            className="p-2 border-2 border-black rounded-md"
            value={formData.proj2_title}
            onChange={(e) => {
              setFormData({ ...formData, proj2_title: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="proj2_link" className="form-label text-gray-700">Link</label>
          <input
            type="text"
            id="proj2_link"
            placeholder="Link to Second Project"
            className="p-2 border-2 border-black rounded-md"
            value={formData.proj2_link}
            onChange={(e) => {
              setFormData({ ...formData, proj2_link: e.target.value });
            }}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="proj2_desc" className="form-label text-gray-700">Description</label>
          <input
            type="text"
            id="proj2_desc"
            placeholder="Short Description about Second Project"
            className="p-2 border-2 border-black rounded-md w-full"
            value={formData.proj2_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;
