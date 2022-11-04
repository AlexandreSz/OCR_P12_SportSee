import React from "react";
import Calories from "../../assets/calories-icon.svg";
import Protein from "../../assets/protein-icon.svg";
import Carbs from "../../assets/carbs-icon.svg";
import Fat from "../../assets/fat-icon.svg";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import "./informations.css";
import { useParams } from "react-router-dom";
import { getUserMainData } from "../../Services/fetchData";

const Informations = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(){
            const infos = await getUserMainData(id);
            setData(infos);
        } 
        getData();
    }, [])

          return (
            <div className="informations">
                <div className="informations__calories">
                    <img src={Calories} alt="Logo Flamme" />
                    <div className="calories__text">
                        <h1>{data?.keyData.calorieCount}kCal</h1>
                        <p>Calories</p>
                    </div>
                </div>
    
                <div className="informations__protein">
                    <img src={Protein} alt="Logo poulet" />
                    <div className="protein__text">
                        <h1>{data?.keyData.proteinCount}g</h1>
                        <p>Protéines</p>
                    </div>
                </div>
    
                <div className="informations__carbs">
                    <img src={Carbs} alt="Logo pomme" />
                    <div className="carbs__text">
                        <h1>{data?.keyData.carbohydrateCount}g</h1>
                        <p>Glucides</p>
                    </div>
                </div>
    
                <div className="informations__fat">
                    <img src={Fat} alt="Logo burger" />
                    <div className="fat__text">
                        <h1>{data?.keyData.lipidCount}g</h1>
                        <p>Lipides</p>
                    </div>
                </div>
            </div>
          )
 
}

export default Informations;