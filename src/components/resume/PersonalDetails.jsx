import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border-4 border-white rounded-lg shadow-lg">
      {/* Card Header with Image */}
      <div className="mb-6">
        <img
          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?t=st=1732868418~exp=1732872018~hmac=cf9e0648cc22de77258cf24355a2939466df066db9b454059ebf738aaa11a575&w=1060"
          alt="Booking"
          className="w-full h-65 rounded-t-lg object-cover"
        />
        <h2 className="text-center text-2xl mt-3">Let's Generate Your Resume</h2>
        <p className="text-center mb-4">Personal Details</p>
        <hr className="mb-4" />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="form-label text-gray-700">Name
          <span className="text-red-500">*</span></label>
          <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="p-2 border-2 border-black rounded-md"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="form-label text-gray-700">Email
          <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-2 border-2 border-black rounded-md"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="form-label text-gray-700">Mobile Number
          <span className="text-red-500">*</span></label>
          <input
            type="number"
            id="phone"
            placeholder="Phone"
            className="p-2 border-2 border-black rounded-md"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>

        {/* GitHub Field */}
        <div className="flex flex-col">
        <label htmlFor="phone" className="form-label text-gray-700">Github Link</label>
          <input
            type="text"
            id="github"
            placeholder="https://github/YOURUSERNAME"
            className="p-2 border-2 border-black rounded-md"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>

        {/* LinkedIn Field */}
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="form-label text-gray-700">Linkedin Profile</label>
          <input
            type="text"
            id="linkedin"
            placeholder="https://linkedin/YOURUSERNAME"
            className="p-2 border-2 border-black rounded-md"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>

        {/* Skills Field */}
        <div className="flex flex-col">
          <label htmlFor="skills" className="form-label text-gray-700">Skills</label>
          <input
            type="text"
            id="skills"
            placeholder="Enter skills and separate each of them with a comma"
            className="p-2 border-2 border-black rounded-md"
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;


// import React, { useState } from 'react';
// //import './App.css';

// function App() {
//     const [formData, setFormData] = useState({
//         Name: '',
//         email: '',
//         mobile: '',
//         github: '',
//         linkedin: '',
//         skills: ''
//     });

//     const PersonalDetails = (event) => {
//         event.preventDefault();

//         const { Name,email, mobile } = formData;
//         if (!Name || !email || !mobile) {
//             // alert("Please fill in all required fields.");
//             // return;
//         }

//         alert("Details updated");
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//             return (
//         <div className="flex justify-center items-center min-h-screen bg-transparent">
//             <div className="bg-white p-6 rounded-lg border-4 border-white max-w-3xl w-full mt-3 overflow-hidden shadow-lg">
//                 <div className="mb-5">
//                     <img
//                         src="https://www.freevector.com/uploads/vector/preview/17784/FreeVector-Global-Business-Background-1.jpg"
//                         alt="Booking"
//                         className="w-full h-64 rounded-t-lg object-cover"
//                     />
//                     <h2 className="text-center text-2xl mb-3">Let's Build Your Resume</h2>
//                     <p className="text-center mb-2">Personal Details</p>
//                     <hr className="mb-4" />
//                 </div>

//                 <form onSubmit={PersonalDetails} className="flex flex-col gap-4">
//                     <div className="flex gap-4">
//                         <input
//                             type="text"
//                             name="Name"
//                             placeholder="Name"
//                             value={formData.Name}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         />
//                         {/* <input
//                             type="number"
//                             name="age"
//                             placeholder="Age"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         /> */}
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-2"
//                         />
//                     </div>

//                     <div className="flex gap-4">
//                         <input
//                             type="tel"
//                             name="mobile"
//                             placeholder="Mobile Number"
//                             value={formData.mobile}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         />
//                         <input
//                             type="text"
//                             name="github"
//                             placeholder="Github"
//                             value={formData.github}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         />
//                     </div>

//                     <div className="flex gap-4">
//                         <input
//                             type="text"
//                             name="linkedin"
//                             value={formData.linkedin}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         />
//                         {/* <input
//                             type="text"
//                             name="skills"
//                             value={formData.skills}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md flex-1"
//                         />
//                     </div> */}
// {/* 
//                     <div className="flex">
//                         <select
//                             name="status"
//                             value={formData.status}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md w-full"
//                         >
//                             <option value="">Status</option>
//                             <option value="confirmed">Confirmed</option>
//                             <option value="cancelled">Cancelled</option>
//                             <option value="completed">Completed</option>
//                         </select>
//                     </div> */}

//                     <div>
//                         <input
//                             type="text"
//                             name="Skills"
//                             placeholder="Skills"
//                             value={formData.Skills}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-600 rounded-md w-full h-24 resize-vertical"
//                         />
//                     </div>

//                     {/* <button type="submit" className="w-52 p-2 bg-green-600 text-white mt-7 mx-auto text-lg font-semibold rounded-lg hover:bg-green-700">
//                         Book Now
//                     </button> */}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default App;

