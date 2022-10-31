import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./performance.css";
import { getPerformance } from '../../Services/API';



const Performance = () => {
  const [userPerformance, setUserPerformance] = useState();
  const userId = useParams().id;

  useEffect(() => {
    async function fetchPerformance(){
      const perf = await getPerformance(userId);
      setUserPerformance(perf);
    }

    fetchPerformance();
  })
  return (
    <div className='performance'>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={userPerformance}>
      <PolarGrid/>
        <PolarAngleAxis dataKey="perf" stroke='white' tickLine={false} />
        <Radar dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>

  );
}

export default Performance;
