import React from "react";
import Calories from "../../assets/calories-icon.svg";
import Protein from "../../assets/protein-icon.svg";
import Carbs from "../../assets/carbs-icon.svg";
import Fat from "../../assets/fat-icon.svg";
import PropTypes from "prop-types";
import "./informations.css";

const Informations = () => {
    return (
        <div className="informations">
            <div className="informations__calories">
                <img src={Calories} alt="Logo Flamme" />
                <div className="calories__text">
                    <h1>1,930kCal</h1>
                    <p>Calories</p>
                </div>
            </div>

            <div className="informations__protein">
                <img src={Protein} alt="Logo poulet" />
                <div className="protein__text">
                    <h1>155g</h1>
                    <p>Protéines</p>
                </div>
            </div>

            <div className="informations__carbs">
                <img src={Carbs} alt="Logo pomme" />
                <div className="carbs__text">
                    <h1>290g</h1>
                    <p>Glucides</p>
                </div>
            </div>

            <div className="informations__fat">
                <img src={Fat} alt="Logo burger" />
                <div className="fat__text">
                    <h1>50g</h1>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default Informations;