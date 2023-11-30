"use client"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from "./chart.module.css"

const SimRadarChart = ({data}) => {
    return(
        <div className={styles.container_sm}>
            <div className={styles.title_sm}>{data.chartProps.chartTitle}</div>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey={data.chartProps.keyName}  tick={{fill: "white"}} />
                {data.chartProps.prAxis==="yes" && <PolarRadiusAxis />}
                {data.chartProps.lines.map((rad)=>
                        <Radar key={rad.dataKey} name={rad.lineName} dataKey={rad.datakey} stroke={rad.strokeColor} fill={rad.fillColor} fillOpacity={rad.fillOpacity} />
                )}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimRadarChart;
