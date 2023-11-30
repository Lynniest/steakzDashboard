"use client"
import styles from "./chart.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const SimPieChart = ({data}) => {


      const COLORS = [...data.chartData.map((item)=>item.color)];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text className={styles.pieLabel} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}% ${data.chartData[index].name}`}
          </text>
        );
      };
    return(
        <div className={styles.container_sm}>
            <span className={styles.title_sm}>{data.chartProps.chartTitle}</span>
            <ResponsiveContainer width="100%" height="95%">
                <PieChart>
                <Pie
                    data={data.chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value">
                    {data.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimPieChart;