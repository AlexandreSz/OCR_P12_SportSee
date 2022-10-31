import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveContainer, RadialBarChart , RadialBar } from 'recharts';
import { getScore } from '../../Services/API';
import "./score.css";


const Score = () => {

  const [userScore, setUserScore] = useState([]);
  const userId = useParams().id;

  useEffect(() => {
    async function fetchScore(){
      const data = await getScore(userId);
      setUserScore(data);
    }

    fetchScore();
  })

  return (
    <div className='score'>

      <div className='score__header'>
        <h1>Score</h1>
      </div>
      <ResponsiveContainer width="100%" height="80%">
      <RadialBarChart data={userScore[0]} width={250} height={250} innerRadius="65%" outerRadius="90%"  startAngle={105} endAngle={600} barCategoryGap={0} >
            <RadialBar minAngle={35} label={false} clockWise={true} dataKey='value' background={false}/>
        </RadialBarChart>
        </ResponsiveContainer>

        <div className='score__label'>
          <div className='score__number'>{userScore[1]}</div>
          <div className='score__text'>de votre objectif</div>
        </div>
    </div>
    
  );
}

export default Score;


