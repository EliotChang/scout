import React from "react";

function TableHeader(){
    return (
        <div className='tableHeader'>
            <span className='tableHeader-title'>
                42 positions open
            </span>
            <br />
            <span className="tableHeader-text">
                Last updated: 8/27/2020
            </span>
        </div>
    );
}
export default TableHeader;