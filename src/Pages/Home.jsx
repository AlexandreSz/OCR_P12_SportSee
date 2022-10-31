import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Activity from "../Components/Activity/Activity";
import Session from "../Components/Session/Session";
import Performance from "../Components/Performance/Performance";
import Score from "../Components/Score/Score";
import Informations from "../Components/Informations/Informations";
import { getUser } from "../Services/API";
import { useParams } from "react-router-dom";





const Home = () => {
   const [userName, setUserName] = useState(null);
   const userId = useParams().id;
   useEffect(() => {
    const fetchUserName = async () => {
        const currentName = await getUser(userId);
        setUserName(currentName);
    }

    fetchUserName();
   })

    return (
        <section className="user">
            <div className="user__infos">
                <h1>Bonjour <span>{userName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="user__charts">
                <article className="charts-container">
                    <Activity />
                    <div className="charts-container-flex">
                    <Session />
                    <Performance />
                    <Score />
                    </div>
                </article>

                <article className="user__informations">
                    <Informations />
                </article>
            </div>
        </section>
    );
};

export default Home;

