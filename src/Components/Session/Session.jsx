import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import "./session.css";



const Session = ({sessions}) => {

  return (
    <div className='session'>
      <div className='session__header'>
        <h1>Durée moyenne des sessions</h1>
      </div>
      
    <ResponsiveContainer width="100%" height="70%">
      <LineChart
      data={sessions}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <XAxis tickLine={false} dataKey="day" />
        <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} activeDot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

    
export default Session;
