import React from 'react';
import './mainPage.css';
import {Link} from 'react-router-dom'
// import { Element } from 'react-scroll';

const MainPage = () => {

   

    return (
        <section className="hero-section">
            <h1>Opportunities don't happen. You create them.</h1>
            <p>The career matchmaker you've been looking for.</p>
            <div className="hsbutton">
                <Link to={"/about"}>WHO WE ARE ?</Link>
            </div>
        </section>
    );
};

export default MainPage;