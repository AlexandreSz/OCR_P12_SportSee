import React from "react";
import Calories from "../../assets/calories-icon.svg";
import Protein from "../../assets/protein-icon.svg";
import Carbs from "../../assets/carbs-icon.svg";
import Fat from "../../assets/fat-icon.svg";
import PropTypes from "prop-types";
import { getMacro } from "../../Services/API";
import {useState, useEffect} from "react";
import "./informations.css";
import { useParams } from "react-router-dom";

const Informations = () => {
    const [userMacro, setUserMacro] = useState(true);
    const userId = useParams().id;

    useEffect(() => {
        const fetchMacro = async () => {
            const currentMacro = await getMacro(userId);
            setUserMacro(currentMacro);
        }

        fetchMacro();
    })
   
    return (
        <div className="informations">
            <div className="informations__calories">
                <img src={Calories} alt="Logo Flamme" />
                <div className="calories__text">
                    <h1>{userMacro[0]}kCal</h1>
                    <p>Calories</p>
                </div>
            </div>

            <div className="informations__protein">
                <img src={Protein} alt="Logo poulet" />
                <div className="protein__text">
                    <h1>{userMacro[1]}g</h1>
                    <p>Protéines</p>
                </div>
            </div>

            <div className="informations__carbs">
                <img src={Carbs} alt="Logo pomme" />
                <div className="carbs__text">
                    <h1>{userMacro[2]}g</h1>
                    <p>Glucides</p>
                </div>
            </div>

            <div className="informations__fat">
                <img src={Fat} alt="Logo burger" />
                <div className="fat__text">
                    <h1>{userMacro[3]}g</h1>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default Informations;