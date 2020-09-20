import React from "react";

function TableHeader(){
    return (
        <div className='tableHeader'>
            <span id='tableHeader-title'>
                42 positions open
            </span>
            <br />
            <span id="tableHeader-text">
                Last updated: 8/27/2020
            </span>
        </div>
    );
}
export default TableHeader;