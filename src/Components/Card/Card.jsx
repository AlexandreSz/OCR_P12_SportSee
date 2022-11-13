import React from "react";

/**
 *
 * @param {*} props
 * @returns a card including the user's informations
 */
const Card = (props) => {
    return (
        <div className={`informations__${props.className}`}>
            <img src={props.src} alt={props.alt} />
            <div className={`${props.textClassName}__text`}>
                <h1>{props.data}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Card;
