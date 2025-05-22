import React from "react";

const MockInterviewPage = () => {
  const mockQuestions = [
    {
      question: "Tell me about yourself.",
      category: "Behavioral",
    },
    {
      question: "Can you describe a challenging situation and how you handled it?",
      category: "Behavioral",
    },
    {
      question: "Explain the difference between REST and GraphQL.",
      category: "Technical",
    },
    {
      question: "Write a function to check if a string is a palindrome.",
      category: "Coding",
    },
    {
      question: "Why do you want to work at our company?",
      category: "HR",
    },
    {
      question: "Design a system for a URL shortening service.",
      category: "System Design",
    },
    {
      question: "What is your greatest strength and weakness?",
      category: "Behavioral",
    },
    {
      question: "How do you prioritize tasks when working on multiple projects?",
      category: "Behavioral",
    },
    {
      question: "What are the key principles of Object-Oriented Programming?",
      category: "Technical",
    },
    {
      question: "How would you handle a situation where a project deadline is at risk?",
      category: "Behavioral",
    },
    {
      question: "Write a function to find the maximum sum of a subarray in an array.",
      category: "Coding",
    },
    {
      question: "What do you know about our company and its products/services?",
      category: "HR",
    },
    {
      question: "Design a database schema for an online bookstore.",
      category: "System Design",
    },
    {
      question: "What are the differences between SQL and NoSQL databases?",
      category: "Technical",
    },
    {
      question: "Describe a time you failed and what you learned from it.",
      category: "Behavioral",
    },
    {
      question: "How do you keep up with the latest developments in your field?",
      category: "HR",
    },
    {
      question: "Write a function to check if two strings are anagrams.",
      category: "Coding",
    },
    {
      question: "How would you scale a video streaming platform to handle millions of users?",
      category: "System Design",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-teal-600">
        Mock Interview Questions
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Practice these common interview questions to excel in your next mock interview.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockQuestions.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-teal-600">
              {item.category} Question
            </h3>
            <p className="text-gray-600 mt-4">{item.question}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => window.history.back()}
          className="mt-8 px-10 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MockInterviewPage;
