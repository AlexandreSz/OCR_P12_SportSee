import React from "react";

/**
 * 
 * @returns Error page
 */

const Error = ({props}) => {
    return (
        <div className="error">
        <p>{props.text}</p>
        </div>

    )
}

export default Error;