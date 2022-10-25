import React from "react";
import PropTypes from "prop-types";
import DailyActivity from "../Components/DailyActivity/DailyActivity";

const Home = () => {
    return (
        <section className="user">
            <div className="user__infos">
                <h1>Bonjour <span>Thomas</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="user__charts">
                <article className="charts-container">
                    <DailyActivity />
                </article>
            </div>
        </section>
    );
};

export default Home;