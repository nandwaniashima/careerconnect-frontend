import React, { useState } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Success";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });

  const [page, setPage] = useState(0);
  const [error, setError] = useState(""); // Error message state

  // Check if any required fields are empty
  const validateForm = () => {
    if (page === 0) {
      if (!formData.name || !formData.email || !formData.phone) {
        setError("Please fill in all required fields in Personal Details.");
        return false;
      }
    } 
    else if (page === 1) {
      if (!formData.edu1_school || !formData.edu1_year || !formData.edu1_qualification) {
        setError("Please fill in all required fields in Projects.");
        return false;
      }
    }else if (page === 3) {
      if (!formData.proj1_title || !formData.proj1_link) {
        setError("Please fill in all required fields in Projects.");
        return false;
      }
    } else if (page === 4) {
      if (!formData.extra_1 && !formData.extra_2) {
        setError("Please fill in at least one extra field.");
        return false;
      }
    }
    setError(""); // Clear error if form is valid
    return true;
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#a8edea] to-[#fed6e3] bg-fixed">
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div>{PageDisplay()}</div>
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Show error message */}

      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 disabled:bg-gray-300 transition-all duration-300"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 disabled:bg-gray-300 transition-all duration-300"
          onClick={() => {
            if (validateForm()) {
              if (page === 4) {
                axios
                  .post("http://localhost:8000/create-pdf", formData)
                  .then(() =>
                    axios.get("http://localhost:8000/fetch-pdf", {
                      responseType: "blob",
                    })
                  )
                  .then((res) => {
                    const pdfBlob = new Blob([res.data], {
                      type: "application/pdf",
                    });
                    setSuccess(true && res.status === 200);
                    saveAs(pdfBlob, "Resume.pdf");
                  });
              } else {
                setPage((currPage) => currPage + 1);
              }
            }
          }}
        >
          {page === 4 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
    </div>
  );
};

export default Form;
