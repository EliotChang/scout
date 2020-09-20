import React from "react";
import image from "../images/image.png";

function Header(){
    return (
        <div className='header'>
            <img src={image} alt="image" />
            <div className= 'header-text'>
                <span className='header-title'>
                    Just a crowdsourced list of internships.
                </span>
                <br />
                <span className="header-subtitle">
                    Scout.
                </span>
            </div>
        </div>
    );
}
export default Header;