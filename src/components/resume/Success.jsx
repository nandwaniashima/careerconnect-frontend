import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = () => {
  useEffect(() => {
    // Trigger the toast when the component is rendered
    toast.success("Hang Tight While Your Resume Downloads!", {
      position: "top-right", // Display toast on the right side
      autoClose: 5000, // Auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
       // Tailwind styling for the toast
// Tailwind styling for the progress bar
    });
  }, []);

  return (
    <>
      {/* Toast container to display messages */}
      <ToastContainer />
    </>
  );
};

export default Success;
