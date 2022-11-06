import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Activity from "../Components/Activity/Activity";
import Session from "../Components/Session/Session";
import Performance from "../Components/Performance/Performance";
import Score from "../Components/Score/Score";
import Informations from "../Components/Informations/Informations";
import { getUserMainData, getUserActivity, getUserSession, getUserPerformance } from "../Services/fetchData";




const Home = () => {

const {id} = useParams();
const [data, setData] = useState({});

useEffect(() => {
    async function getData(){
        try{
            const user = await getUserMainData(id);
            const activity = await getUserActivity(id);
            const sessions = await getUserSession(id);
            const performance = await getUserPerformance(id);
            setData({user, activity, sessions, performance});


        } catch(error){
            console.log(error);
        }

    }
    getData();

}, [])

    return (
        <section className="user">
            <div className="user__infos">
                <h1>Bonjour <span>{data?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="user__charts">
                <article className="charts-container">
                    <Activity activity={data?.activity?.sessions}/>
                    <div className="charts-container-flex">
                    <Session sessions={data?.sessions?.sessionData}/>
                    <Performance performance={data?.performance?.formatPerf}/>
                    <Score score={data?.user?.score[0].value}/>
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

