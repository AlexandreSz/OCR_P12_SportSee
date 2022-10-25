import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {ReactComponent as Dot } from "../../assets/Dot.svg";
import "./activity.css";

const data = [
  {name: 'Page A', uv: 4000, pv: 2400,amt: 2400,},
  {name: 'Page B',uv: 3000,pv: 1398,amt: 2210,},
  {name: 'Page C',uv: 2000,pv: 9800,amt: 2290,},
  {name: 'Page D',uv: 2780,pv: 3908,amt: 2000,},
  {name: 'Page E',uv: 1890,pv: 4800,amt: 2181,},
  {name: 'Page F', uv: 2390,pv: 3800,amt: 2500,},
  {name: 'Page G',uv: 3490,pv: 4300,amt: 2100,},
];

const getDay = (date) => {
  const dateNbr = new Date(date);
  return dateNbr.getDate();
}

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity__header">
        <h3>Activité quotidienne</h3>
        <div className="activity__legend">
          <Dot fill="#282D30"  className="legend" /><span>Poids (kg)</span>
          <Dot fill="#E60000" className="legend" /><span>Calories brûlées (kCal)</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" dx={-10} dy={1} axisLine={false} tickLine={false} tickFormatter={getDay}/>
          <YAxis axisLine={false} tickLine={false} orientation="right"/>
          <Tooltip />
          <Bar dataKey="pv" fill="#282D30" radius={[50, 50, 0, 0]}/>
          <Bar dataKey="uv" fill="#E60000" radius={[50, 50, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity;