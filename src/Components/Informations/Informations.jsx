import React from "react";
import Calories from "../../assets/calories-icon.svg";
import Protein from "../../assets/protein-icon.svg";
import Carbs from "../../assets/carbs-icon.svg";
import Fat from "../../assets/fat-icon.svg";
import { useState, useEffect } from "react";
import "./informations.css";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import { getUserMainData } from "../../Services/fetchData";

/**
 * @component - Shows a sidebar including the user's macro information
 * @returns Informations component
 **/

const Informations = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const infos = await getUserMainData(id);
            setData(infos);
        }
        getData();
    }, []);

    return (
        <div className="informations">
            <Card
                className="calories"
                src={Calories}
                alt="Logo Flamme"
                textClassName="calories"
                data={`${data?.keyData.calorieCount}kCal`}
                text="Calories "
            />

            <Card
                className="protein"
                src={Protein}
                alt="Logo poulet"
                textClassName="protein"
                data={`${data?.keyData.proteinCount}g`}
                text="Protéines"
            />

            <Card
                className="carbs"
                src={Carbs}
                alt="Logo pomme"
                textClassName="carbs"
                data={`${data?.keyData.carbohydrateCount}g`}
                text="Glucides"
            />

            <Card
                className="fat"
                src={Fat}
                alt="Logo burger"
                textClassName="fat"
                data={`${data?.keyData.lipidCount}g`}
                text="Lipides"
            />
        </div>
    );
};

export default Informations;
