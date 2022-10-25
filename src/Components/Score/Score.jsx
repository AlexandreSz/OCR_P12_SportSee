import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Customized } from 'recharts';
import "./score.css";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const Score = () => {
  return (
    <div className='score'>
      <div className='score__header'>
        <h1>Score</h1>
      </div>
      <ResponsiveContainer width="100%" height="80%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          fill="transparent"
          stroke='transparent'
          dataKey="value"
        >
           <Cell fill="#FF0000" />
           <Cell fill="#FF0000" />

        </Pie>
        </PieChart>


        </ResponsiveContainer>



    </div>
    
  );
}

export default Score;


