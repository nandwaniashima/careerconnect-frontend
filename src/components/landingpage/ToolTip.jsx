import React, { useState } from 'react';
import './ToolTip.css';

const ToolTip = ({ children, text }) => {
    const [show, setShow] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && <div className="tooltip">{text}</div>}
        </div>
    );
};

export default ToolTip;
