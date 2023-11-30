"use client"

import sytles from "./chart.module.css";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimBarChart =({data}) => {

    return (
        <div className={sytles.container_lg}>
            <h2 className={sytles.title}>{data.chartProps.chartTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={data.chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey={data.chartProps.keyName} tick={{fill: "white" , fillOpacity: 0.7}}  axisLine={{ stroke: 'white', strokeWidth: 0.3 }} />
                <YAxis tick={{fill: "white" , fillOpacity: 0.7}}  axisLine={{ stroke: 'white', strokeWidth: 0.3 }}/>
                <Tooltip />
                <Legend />
                {data.chartProps.chartItems.map((item)=>{
                    return (
                        <Bar key={item.itemName} dataKey={item.itemName} fill={item.fillColor} activeBar={<Rectangle fill={item.activeFillColor}stroke={item.activeStokeColor} />} />
                    );
                })}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimBarChart;