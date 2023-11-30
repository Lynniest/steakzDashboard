import styles from "../../ui/dashboard/dashboard.module.css"
import Card, { ChartCard } from "../../ui/dashboard/card/card";
import Rightbar from "../../ui/dashboard/rightbar/rightbar";
import {DashlineChart} from "../../ui/dashboard/charts/chart";
import SimPieChart from "../../ui/dashboard/charts/pieChart";
import { MdAttachMoney, MdTrendingUp} from "react-icons/md"
import SimRadarChart from "../../ui/dashboard/charts/radarChart";
import SimBarChart from "../../ui/dashboard/charts/barChart";
import { fetchMockSalesData } from "../../lib/placeholderData";

const Dashboard = async () => {

    const data = await fetchMockSalesData();
    const allChartData = data?.allChartData;
    const topCardData = data?.topCardData;
    const botCardData = data?.botCardData;
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <div className={styles.cards_vr}>
                        <Card data ={topCardData} />
                        <Card data ={botCardData} />
                    </div>
                    <ChartCard children={<SimPieChart data={allChartData.pieChartData} />} className={styles.piechart}/>
                   <ChartCard children={<SimRadarChart data={allChartData.radChartData} />} className={styles.piechart}/>
                </div>
                <DashlineChart data={allChartData.dashLineChartData} />
                <SimBarChart data={allChartData.barChartData} />
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    );
}

export default Dashboard;