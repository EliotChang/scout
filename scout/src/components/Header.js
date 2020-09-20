import React from "react";
import image from "../images/image.svg";

function Header(){
    return (
        <div className='header'>
            <img src={image} alt="image" />
            <div className= 'header-text'>
                <span className='header-title'>
                    We couldn't find any jobs <br />
                    so we made this website to help you find one
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