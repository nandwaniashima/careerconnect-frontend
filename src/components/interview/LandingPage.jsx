import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-24 px-6 flex flex-col items-center text-center h-[60vh]">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
          Master Your Interviews
        </h1>
        <p className="text-xl mt-4 max-w-2xl">
          Learn, practice, and ace your next interview with confidence.
        </p>
        <Link to="/preparation">
          <button className="mt-8 px-10 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:bg-teal-100 transition-all transform hover:scale-105">
            Start Preparing Now
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50 flex-1">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Mock Interviews */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-teal-600">Mock Interviews</h3>
            <p className="text-gray-600 mt-4">
              Simulate real-world interviews with industry experts and receive personalized feedback.
            </p>
            <Link to="/mock-interviews">
              <button className="mt-6 px-8 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-all transform hover:scale-105">
                Explore Questions
              </button>
            </Link>
          </div>

          {/* Tailored Study Plans */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-teal-600">Tailored Study Plans</h3>
            <p className="text-gray-600 mt-4">
              Get custom plans based on your role, experience level, and company preferences.
            </p>
            <Link to="/study-plans">
              <button className="mt-6 px-8 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-all transform hover:scale-105">
                Explore Study Plans
              </button>
            </Link>
          </div>

          {/* Coding Challenges */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-teal-600">Coding Challenges</h3>
            <p className="text-gray-600 mt-4">
              Practice coding problems designed to mirror technical interviews.
            </p>
            <a
              href="/coding-challenges"
              className="mt-6 inline-block px-8 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-all transform hover:scale-105"
            >
              Explore Challenges
            </a>
          </div>

          {/* Test Yourself */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-teal-600">Test Yourself</h3>
            <p className="text-gray-600 mt-4">Practice MCQ Questions.</p>
            <a
              href="/mcq-practice"
              className="mt-6 inline-block px-8 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-all transform hover:scale-105"
            >
              MCQ Questions
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <p className="text-gray-600 italic">
              "I secured my dream job thanks to the realistic mock interviews and detailed feedback."
            </p>
            <p className="mt-6 font-semibold text-gray-800">- Sarah Williams</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <p className="text-gray-600 italic">
              "The coding challenges were exactly like the ones I faced during my interviews!"
            </p>
            <p className="mt-6 font-semibold text-gray-800">- John Doe</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <footer className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Ready to Get Started?</h2>
        <p className="text-lg mt-4 mb-8 max-w-3xl mx-auto">
          Join thousands of others preparing for their dream jobs today.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
