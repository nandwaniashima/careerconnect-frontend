import React,{useState,useEffect} from 'react';
import Header from './Header';
import MainPage from './mainPage';
import Textsection from './TextSection';
import Testimonials from './Testimonials';
import Company from './partner';
import InnovationSection from './innovation';
import CaseStudiesSection from './casestudy';
import BlogSection from './blogsection';
import FAQSection from './question';
import Footer from './footer';
import Preloader from './Preloader';






const Hero = () => {
    
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [scrollRotation, setScrollRotation] = useState(45);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCollapsed(true); // Start collapsing after a delay
        }, 5); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxRotation = 90;
            const rotation = Math.min(45 + scrollTop * 0.2, maxRotation);
            setScrollRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);

        
    }, []);
    // const handleLogin = () => {
    //     // Simulate successful login (set isLoggedIn to true)
    //     setIsLoggedIn(true);
    // };

    const [loaded, setLoaded] = useState(false);

    const handleLoaded = () => {
      setLoaded(true);
    };

    return (
        <main className='home-container'> 
         {!loaded && <Preloader onLoaded={handleLoaded} />}
        <Header />
            <section className="hero">
            <div className={`screen ${collapsed ? 'collapsed' : ''}`}></div>
                <div className="text-container">
                    <h1>Connecting talent</h1>
                    <h2> with opportunity.</h2>
                </div>
                {/* <div className=""></div> */}
                <div className="material-icons rotate-icon" style={{ transform: `rotate(${scrollRotation}deg)` }}>arrow_forward</div>
            </section>
        <MainPage />
        <InnovationSection  />
        <CaseStudiesSection/>
        <Textsection/>
        <Testimonials/>
        <Company/>
        <BlogSection/>
        <FAQSection/>
        <Footer/>
        </main>
    );
};

export default Hero;