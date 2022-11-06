import React from 'react';
import { ResponsiveContainer, RadialBarChart , RadialBar, PolarAngleAxis } from 'recharts';
import "./score.css";


const Score = ({score}) => {

  const data = [{uv: score, fill: '#E60000'}];
  return (
    <div className='score'>
      <div className='score__header'>
        <h1>Score</h1>
      </div>
      <ResponsiveContainer width="100%" height="80%">
      <RadialBarChart data={data} width={250} height={250} innerRadius="65%" outerRadius="90%"  startAngle={105} endAngle={600} barCategoryGap={0} >
      <circle cx="50%" cy="50%" fill="white" r="82"></circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}
          />
          <RadialBar
            background
            dataKey="uv"
            angleAxisId={1}
            cornerRadius="10"
          />
        </RadialBarChart>
        </ResponsiveContainer>

        <div className='score__label'>
          <div className='score__number'>{score} %</div>
          <div className='score__text'>de votre objectif</div>
        </div>
    </div>
    
  );
}

export default Score;


