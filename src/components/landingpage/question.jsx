import React, { useState } from 'react';
import './question.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { question: "How do I create an account on the job portal?", answer: "To create an account, click on the Sign Up button at the top right corner of the homepage. Fill in your details, verify your email, and you’re ready to start applying for jobs." },
        { question: "How can I search for jobs that match my skills?", answer: "Use our advanced search feature, where you can filter jobs by keywords, location, industry, and skill set. This will help you find opportunities that align with your experience and career goals." },
        { question: "Can I save job listings to apply later?", answer: "Yes, you can save job listings by clicking the Save Job button on the job details page. You can view all saved jobs under the Saved Jobs section in your account dashboard." },
        { question: "How do I apply for jobs through the portal?", answer: "Once you find a job that interests you, click on the job listing, review the details, and click Apply Now. You may need to upload your resume and cover letter before submitting your application." },
        { question: "What should I do if I forget my password?", answer: "If you forget your password, click on the Forgot Password link on the login page. Follow the instructions to reset your password via the email associated with your account." },
        { question: "How do I track my job application status?", answer: "You can track the status of your job applications under the My Applications section in your dashboard. Here, you’ll see whether your application is under review, shortlisted, or if the position has been closed." },
        { question: "How can I get job alerts for new postings", answer: "You can set up job alerts by subscribing to notifications. Customize your preferences by selecting job categories, locations, and frequency of alerts. You’ll receive email notifications when new jobs that match your criteria are posted." },
    ];

    return (
        <section className="faq-section">
            <div className="faq-header">
                <h2>Any questions?</h2>
                <p>Our experts answer your questions.</p>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? 'open' : ''}`} 
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
