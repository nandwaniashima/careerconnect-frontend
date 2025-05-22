import React from "react";
import "./ContactFormPage.css";
import Header from "./Header";

const ContactFormPage = () => {
  return (
    <div className='contactreturn'>
    <Header/>
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left-section">
        <h1>
        Got Questions? <br />
          <span className="italic">We're Here to</span> <br />
          <span className="italic">Help!</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="contact-right-section">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email*" required />
            <input type="number" placeholder="Mobile Number*" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Profession" required />
            <input type="text" placeholder="Subject*" required />
          </div>
          <div className="form-row">
          
            <select required>
              <option value="1">Recruiter</option>
              <option value="2">Job Seeker</option>
            </select>
          </div>
          <div className="form-row">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="form-c">
            <input type="checkbox" id="accept" />
            <label htmlFor="accept">
             <span> I accept to receive other communications from CareerConnect.</span>
            </label>
          </div>
          <p className="privacy-text">
You can unsubscribe from these communications at any time. Consult our Privacy Policy to learn more about our unsubscription procedures, our privacy policies, and our commitment to protecting and respecting your privacy.
            <br />
            By clicking "Send" below, you authorize CareerConnect to store and process the personal data submitted above to provide you with the requested content.
          </p>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactFormPage;