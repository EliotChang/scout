import React from "react";
function PhoneInput(){
    return (
        <div className='PhoneInput'>
            <form>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="New job who dis? Drop your phone number to stay updated."
                />
                <input
                    className="submit"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        </div>
    );
}
export default PhoneInput;