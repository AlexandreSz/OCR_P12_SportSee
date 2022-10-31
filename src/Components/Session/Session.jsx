import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSessions } from "../../Services/API";
import "./session.css";



const Session = () => {
  const [userSession, setUserSession] = useState([]);
  const userId = useParams().id;
  const week = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    async function fetchSession(){
      const data = await getSessions(userId);
      setUserSession(data);
    }

    fetchSession();
  })


  return (
    <div className='session'>
      <div className='session__header'>
        <h1>Durée moyenne des sessions</h1>
      </div>
      
    <ResponsiveContainer width="100%" height="70%">
      <LineChart
        width={500}
        height={300}
        data={userSession}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <XAxis tickLine={false} />
        <Line type="monotone" dataKey="pv" stroke="#fff" dot={false} activeDot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

    
export default Session;
