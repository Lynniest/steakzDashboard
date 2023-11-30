import DashboardComponent from "../ui/dashboard/dashboardComponent/dashboardComponent";
import styles from "../ui/dashboard/dashboard.module.css"
import { fetchMockUserData } from "../lib/placeholderData";
const Dashboard = async () => {
    const user = fetchMockUserData("adminstrator01");
    console.log(user)
    return (
    <div className={styles.container}>
        <DashboardComponent user={user}/>
    </div>
    );
}

export default Dashboard;