import React from "react";
import image from "../images/image.svg";

function Header(){
    return (
        <div id='header'>
            
            <div id='header-image'>
                <img src={image} alt="image" />
            </div>
            
            <div id= 'header-text'>
                <span id='header-title'>
                    We couldn't find any jobs <br />
                    so we made this website to help you find one
                </span>
                <br />
                <span id="header-subtitle">
                    Scout.
                </span>
            </div>
        </div>
    );
}
export default Header;