import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./performance.css";


/**
 * 
 * @component
 * @param {Array} Array of users performance 
 * @returns Performance component
 */

const Performance = ({performance}) => {

  return (
    <div className='performance'>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performance}>
      <PolarGrid/>
        <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} />
        <Radar dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>

  );
}

export default Performance;
