import React from "react";
import PropTypes from "prop-types";
import Activity from "../Components/Activity/Activity";
import Session from "../Components/Session/Session";
import Performance from "../Components/Performance/Performance";
import Score from "../Components/Score/Score";
import Informations from "../Components/Informations/Informations";

const Home = () => {
    return (
        <section className="user">
            <div className="user__infos">
                <h1>Bonjour <span>Thomas</span></h1>
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