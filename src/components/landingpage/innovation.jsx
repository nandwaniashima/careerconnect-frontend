import React from 'react';
import { useNavigate } from 'react-router-dom';
import './innovation.css';
import {useSelector } from "react-redux";

const InnovationSection = () => {
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.auth);

    // Function to handle feature clicks
    const handleFeatureClick = (feature) => {
        if (user) {
            // If logged in, navigate to the respective feature
            switch (feature) {
                case "exploreJobs":
                    navigate("/jobs");
                    break;
                case "coursesTests":
                    navigate("/courses-tests");
                    break;
                case "applicationStatus":
                    navigate("/application-status");
                    break;
                case "aceInterviews":
                    navigate("/payment");
                    break;
                default:
                    break;
            }
        } else {
            // If not logged in, redirect to the login page
            navigate("/login");
        }
    };

    return (
        <section className="innovation-section" id="features">
            <div className="innovation">
                <h2>Our Features</h2>
                <br />
                <p className="innovation-intro">Your one-stop destination for career success.</p>
                <div className="innovation-cards">
                    <div className="innovation-card" onClick={() => handleFeatureClick("exploreJobs")}>
                        <span className="material-icons innovation-icon innovation-icon1">
                            search
                        </span>
                        <h3>Explore Jobs</h3>
                        <p>Level Up Your Career! Discover thousands of job openings tailored to your skills and interests. Start your search today and find the perfect role that suits you.</p>
                    </div>
                    <div className="innovation-card" onClick={() => handleFeatureClick("coursesTests")}>
                        <span className="material-icons innovation-icon innovation-icon2">
                            description
                        </span>
                        <h3>Courses and Tests</h3>
                        <p>Learn new skills and enhance your expertise with our carefully crafted courses and challenge your knowledge and measure your progress with our insightful tests.</p>
                    </div>
                    <div className="innovation-card" onClick={() => handleFeatureClick("applicationStatus")}>
                        <span className="material-icons innovation-icon innovation-icon3">
                            track_changes
                        </span>
                        <h3>Application Status</h3>
                        <p>Easily monitor your job applications with real-time updates and notifications, all from a simple, intuitive dashboard. Stay informed and organized throughout your job search.</p>
                    </div>
                    <div className="innovation-card" onClick={() => handleFeatureClick("aceInterviews")}>
                        <span className="material-icons innovation-icon innovation-icon4">
                            library_books
                        </span>
                        <h3>Ace Interviews</h3>
                        <p>Prepare with confidence using our expert tips, practice questions, and essential guides. Enhance your skills and make a strong impression in your interviews.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationSection;
