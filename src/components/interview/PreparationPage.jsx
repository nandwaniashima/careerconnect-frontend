import React from "react";

const PreparationPage = () => {
  const interviewTips = [
    "Research the company and role thoroughly.",
    "Practice common interview questions and answers.",
    "Prepare STAR-based answers for behavioral questions.",
    "Brush up on technical skills and solve coding problems.",
    "Dress professionally and be punctual.",
    "Prepare insightful questions to ask the interviewer.",
    "Follow up with a thank-you email after the interview.",
  ];

  return (
    <div className="bg-gradient-to-b from-teal-100 to-white min-h-screen py-12 px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-teal-700">
            Interview Preparation Tips
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Start your journey to mastering interviews with these expert tips.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-teal-500"
            >
              <h3 className="text-2xl font-semibold text-teal-700">
                Tip {index + 1}
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 text-lg font-medium bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreparationPage;
