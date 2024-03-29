import React from 'react';
import "./NotFound.css";
import { NavLink } from 'react-router-dom';
import error from "./images/error-banner.png"

const NotFound = () => {
    return (
        <div className="error-container m-5">
            <div className="wrap">
                <div className="main2">
                    <div className="banner">
                        <img src={error} alt="" />
                    </div>
                    <div className="text">
                        <h1 id="error-head">The requested url was not found !...</h1>
                        <p id="error-para">Sorry!Evidently the document you were looking for has either been moved or no longer exists!</p>

                    </div>
                </div>

            </div>
            <div style={{ textAlign: 'center', padding: '10px' }}>
                <NavLink to="/home" className="primary-btn">Redirect To Home Page</NavLink>
            </div>
        </div>
    );
};

export default NotFound;