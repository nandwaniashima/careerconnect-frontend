import React, { useState } from "react";

const studyPlans = {
  "Software Engineer": {
    Beginner: [
      "Learn programming basics: variables, loops, and functions.",
      "Practice simple coding problems on platforms like LeetCode or HackerRank.",
      "Study basic data structures: arrays, strings, stacks, and queues.",
      "Familiarize yourself with version control tools like Git.",
    ],
    Intermediate: [
      "Master advanced data structures like graphs, heaps, and tries.",
      "Solve medium-level coding problems daily.",
      "Understand OOP concepts and design patterns.",
      "Learn system design basics for scalable architectures.",
    ],
    Advanced: [
      "Master system design concepts like load balancing and caching.",
      "Work on large-scale coding problems and projects.",
      "Learn distributed systems and database optimization.",
      "Prepare for behavioral interviews with real-life examples.",
    ],
  },
  "Web Developer": {
    Beginner: [
      "Learn HTML, CSS, and JavaScript basics.",
      "Practice building simple static web pages.",
      "Understand responsive design and CSS frameworks like Bootstrap or Tailwind.",
      "Familiarize yourself with browser developer tools for debugging.",
    ],
    Intermediate: [
      "Learn modern JavaScript frameworks like React, Vue, or Angular.",
      "Master state management libraries like Redux or Context API.",
      "Understand REST APIs and fetch data using Axios or Fetch API.",
      "Work on small web projects to build a portfolio.",
    ],
    Advanced: [
      "Master full-stack development using Node.js and databases like MongoDB or PostgreSQL.",
      "Understand advanced performance optimization techniques.",
      "Learn about server-side rendering (SSR) using frameworks like Next.js.",
      "Work on large-scale projects with advanced routing, authentication, and APIs.",
    ],
  },
  "Data Scientist": {
    Beginner: [
      "Learn Python basics and data analysis libraries (Pandas, NumPy).",
      "Understand statistics, probability, and visualization techniques.",
      "Work on beginner-level machine learning models like regression.",
      "Practice basic SQL queries for data manipulation.",
    ],
    Intermediate: [
      "Master machine learning algorithms like decision trees and SVM.",
      "Study deep learning frameworks like TensorFlow and PyTorch.",
      "Work on real-world datasets and participate in Kaggle competitions.",
      "Learn cloud platforms like AWS for deploying ML models.",
    ],
    Advanced: [
      "Optimize deep learning models for large datasets.",
      "Understand advanced concepts like reinforcement learning.",
      "Build end-to-end projects integrating ML with business problems.",
      "Publish a research paper or contribute to open-source projects.",
    ],
  },
  "UI/UX Designer": {
    Beginner: [
      "Learn basic design tools like Figma and Adobe XD.",
      "Understand color theory, typography, and layout design.",
      "Build a simple portfolio with 2-3 case studies.",
      "Research popular UI/UX design blogs and tutorials.",
    ],
    Intermediate: [
      "Work on real-world design challenges with user personas.",
      "Learn advanced prototyping and animations.",
      "Collaborate with developers to understand design-to-code workflows.",
      "Participate in design hackathons or challenges.",
    ],
    Advanced: [
      "Create a standout portfolio showcasing your design impact.",
      "Understand accessibility standards in design.",
      "Study advanced interaction design and micro-animations.",
      "Lead a design project from concept to delivery.",
    ],
  },
  "DevOps Engineer": {
    Beginner: [
      "Understand basic Linux commands and shell scripting.",
      "Learn version control systems like Git.",
      "Study CI/CD concepts and tools like Jenkins or GitHub Actions.",
      "Learn Docker basics for containerization.",
    ],
    Intermediate: [
      "Master Kubernetes for container orchestration.",
      "Learn infrastructure-as-code tools like Terraform or Ansible.",
      "Understand logging and monitoring tools like Prometheus and Grafana.",
      "Set up CI/CD pipelines for sample applications.",
    ],
    Advanced: [
      "Optimize pipelines for large-scale projects.",
      "Study advanced cloud-native concepts (e.g., microservices).",
      "Implement blue-green and canary deployments.",
      "Work on improving system reliability using SRE principles.",
    ],
  },
  "Cloud Engineer": {
    Beginner: [
      "Understand cloud computing basics and service models (IaaS, PaaS, SaaS).",
      "Learn AWS, Azure, or GCP basics (e.g., EC2, S3, VMs).",
      "Set up a basic website using cloud services.",
      "Study cloud security fundamentals.",
    ],
    Intermediate: [
      "Master advanced cloud services like Lambda, Kubernetes, and serverless architectures.",
      "Understand networking concepts like VPC and load balancing.",
      "Learn automation tools like Terraform and CloudFormation.",
      "Work on multi-cloud or hybrid-cloud setups.",
    ],
    Advanced: [
      "Optimize cloud cost management strategies.",
      "Understand high availability and disaster recovery.",
      "Specialize in cloud migrations for enterprise clients.",
      "Work on edge computing and IoT integrations.",
    ],
  },
};

const roles = Object.keys(studyPlans);

const TailoredStudyPlansPage = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [experienceLevel, setExperienceLevel] = useState("Beginner");

  const handleRoleChange = (e) => setSelectedRole(e.target.value);
  const handleExperienceChange = (e) => setExperienceLevel(e.target.value);

  return (
    <div className="bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-teal-600">
        Tailored Study Plans
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Choose your role and experience level to get a customized study plan!
      </p>

      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          className="px-4 py-2 border border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={experienceLevel}
          onChange={handleExperienceChange}
          className="px-4 py-2 border border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-teal-600">
          Study Plan for {selectedRole} ({experienceLevel})
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          {studyPlans[selectedRole][experienceLevel].map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
        {/* Back Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.history.back()}
            className="mt-8 px-10 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailoredStudyPlansPage;
