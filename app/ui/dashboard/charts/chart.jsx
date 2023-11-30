"use client";
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const DashlineChart = ({data}) => {
    return (
    <div className={styles.container}>
        <h2 className={styles.title}>{data.chartProps.chartTitle}</h2>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
            width={100}
            height={100}
            data={data.chartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <XAxis dataKey="name" tick={{fill: "white", fillOpacity: 0.7}}  axisLine={{ stroke: 'white', strokeWidth: 0.3 }} />
            <YAxis tick={{fill: "white" , fillOpacity: 0.7}}  axisLine={{ stroke: 'white', strokeWidth: 0.3 }} />
            <Tooltip contentStyle={{background:"blue", border:"none"}}/>
            <Legend />
            {data.chartItems.map((line)=>{return(
              <Line key={line.lineTitle} type="monotone" dataKey={line.lineTitle} stroke={line.lineColor} strokeDasharray={line.strokeDasharray} />
            )})}
            </LineChart>
        </ResponsiveContainer>

    </div>
    );
}


