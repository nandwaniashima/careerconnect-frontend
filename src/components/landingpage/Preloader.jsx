import React, { useState, useEffect } from 'react';
import './Preloader.css'; 

const Preloader = ({ onLoaded }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    onLoaded(); //loading is complete
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 10); //Speed of loading

        return () => clearInterval(interval);
    }, [onLoaded]);

    return (
        <div className="preloader">
            <div className="loader">
                <p>{progress}%</p>
            </div>
        </div>
    );
};

export default Preloader;