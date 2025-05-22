import React from "react";
import "./WhoWeAre.css";
import Header from './Header';

function WhoWeAre() {
  return (
    
    <div className="WhoWeAre">
     <Header/>
     <div className="vision2">
      <div className="vision-container">
        <h1 className="vision-title">
          Shaping Careers, <div className="vision-italic">Unlocking Oppurtunities</div>
        </h1>
        {/* <div className="vision-arrow">⬇</div> */}
        <div className="material-icons vision-arrow">arrow_forward</div>
        <p className="vision-subtitle">Your partner in growth and success.</p>
      </div>
      {/* yellow chatbot */}
      {/* <div className="bottom-decor">
        <div className="yellow-decor"></div>
      </div> */}

   {/* content section */}
  {/* <div className="content-section">
  <p className="content-paragraph">
    The new world is upon us. Alongside it, new challenges that will give
    each and every one of us the opportunity to play a part. Innovating means
    changing the world to write an alternative future.
  </p>
  <p className="content-paragraph">
    At the dawn of the 21st century, the collective awakening we are witnessing
    is the foundation of this alternative future, built by a surge of action
    and a civic will to transform society so that it better reflects the
    humanist and responsible values we hold dear.
  </p>
  <p className="content-paragraph">
    As we all know, innovation is the driving force behind this new future. It
    is unrealistic to ask companies to stop producing, but it is desirable to
    find alternatives to traditional models, to rethink the way we live
    collectively, so that everyone can find their place.
  </p>
  <p className="content-paragraph">
    Innovation requires discipline, and for us, it is essential to have at
    heart the passion and knowledge to guide it. It’s thanks to these qualities
    that we can build a better future together.
  </p>
</div> */}

<div className="additional-section">
        {/* The Collective Section */}
        <div className="section-container borderthin">
          <h2 className="section-title">Who We Are</h2>
          <div className="section-content">
            <p>
            At CareerConnect, we are more than just a job portal. We are a dedicated team driven by a singular mission: to bridge the gap between talented individuals and the right career opportunities. With our cutting-edge technology, intuitive platform, and a deep understanding of the evolving job market, we empower job seekers and employers to come together and create meaningful connections that last.
            </p>
          </div>
        </div>

        {/* The Passion Section */}
        <div className="section-container">
          <h2 className="section-title">Our Vision</h2>
          <div className="section-content">
            <p>
            Our vision is to revolutionize the way people connect with opportunities. We believe that every job seeker has unique skills and potential, and every employer deserves to find the right talent. Through innovative features, personalized recommendations, and a focus on building long-term professional relationships, we aim to create a world where talent and opportunity align seamlessly.
            </p>
          </div>
        </div>
        
        <div className="section-container">
          <h2 className="section-title">What We Do</h2>
          <div className="section-content">
            <p>
            We bring job seekers and employers together in a space designed to foster growth, collaboration, and success. Whether you're a job seeker looking for your next big career move or a company seeking top talent, our platform offers the tools you need to succeed. From personalized job recommendations to detailed company profiles and real-time job alerts, we ensure that every connection made is a step toward success.
            </p>
          </div>
        </div>

        <div className="section-container">
          <h2 className="section-title">Our Commitment</h2>
          <div className="section-content">
            <p>
            We are committed to making the job search process easier, more efficient, and more rewarding. Our team works tirelessly to ensure that both job seekers and employers have the resources they need to succeed in an ever-changing job market. With an emphasis on integrity, transparency, and innovation, we strive to be a trusted partner in your career journey.
            </p>
          </div>
        </div>

        <div className="section-container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-content">
            <p>
            CareerConnect is designed with you in mind. We understand that job searching can be overwhelming, and finding the right candidate can be a challenge. That’s why we offer an intuitive, user-friendly platform that adapts to your needs. With our tailored approach, personalized career advice, and a vast network of employers and candidates, we are your go-to partner for unlocking growth and opportunity.

            </p>
          </div>
        </div>



      </div>

      

      </div>
      
    </div>
    
    
  );
}

export default WhoWeAre;