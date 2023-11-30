import styles from "../../ui/dashboard/dashboard.module.css"
import Card, { ChartCard } from "../../ui/dashboard/card/card";
import Rightbar from "../../ui/dashboard/rightbar/rightbar";
import {DashlineChart} from "../../ui/dashboard/charts/chart";
import SimPieChart from "../../ui/dashboard/charts/pieChart";
import {MdSupervisedUserCircle, MdAttachMoney, MdTrendingUp} from "react-icons/md"
import SimRadarChart from "../../ui/dashboard/charts/radarChart";
import SimBarChart from "../../ui/dashboard/charts/barChart";
import { fetchMockHRData } from "../../lib/placeholderData";

const HRDashboard = async () => {
    const data = await fetchMockHRData();
    const allChartData = data.allChartData;
    const topCardData = data.topCardData;
    const botCardData = data.botCardData;
    const topCardDataA = data.topCardDataA;
    const botCardDataA = data.botCardDataA;
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                  <div className={styles.cards_vr}>
                    <div className={styles.cards}>
                      <Card data ={topCardData} />
                      <Card data ={botCardData} />
                    </div>
                    <ChartCard children={<SimPieChart data={allChartData.pieChartData} />} className={styles.centerChart}/>
                    <div className={styles.cards}>
                      <Card data ={topCardDataA} />
                      <Card data ={botCardDataA} /> 
                    </div>
                  </div>
                  <ChartCard children={<SimBarChart data={allChartData.barChartData} />} className={styles.centerChart}/>

                   {/* <ChartCard children={<SimRadarChart data={allChartData.radChartData} />} className={styles.piechart}/> */}
                </div>


                <DashlineChart data={allChartData.dashLineChartData} />
                
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    );
}

export default HRDashboard;