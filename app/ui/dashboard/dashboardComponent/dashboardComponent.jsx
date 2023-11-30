import { arrangeClearenceLvl } from "@/app/lib/util";
import styles from "./dashboardComponent.module.css"
import Link from "next/link";
import {
  MdDashboard,
  MdAttachMoney,
  MdPeople,
  MdOutlineStackedLineChart,
  MdOutlineTrendingUp,
  MdDashboardCustomize,
} from "react-icons/md"


const DashboardComponent = async ({user}) => {
    const userClearence = arrangeClearenceLvl(user.roleCategory);
    console.log(userClearence)
    const items = {
    list: [
      {
        title: "Bussiness Performance Dashboard",
        path: "/dashboard/BussinessPerformanceDashboard",
        icon: <MdOutlineTrendingUp size={30} />,
        clearence: 1
      },
      {
        title: "Company Plan Performance Dashboard",
        path: "/dashboard/CompanyPlanPerformanceDashboard",
        icon: <MdDashboardCustomize size={30} />,
        clearence: 1
      },
      {
        title: "HR Recruitment Dashboard",
        path: "/dashboard/HR_RecruitmentDashboard",
        icon: <MdPeople size={30} />,
        clearence: 2
      },
      {
        title: "Decision Support Dashboard",
        path: "/dashboard/DecisionSupportDashboard",
        icon: <MdDashboard size={30}/>,
        clearence: 2
      },
      {
        title: "Sales Dashboard",
        path: "/dashboard/SalesDashboard",
        icon: <MdAttachMoney size={30}/>,
        clearence: 3
      },
      {
        title: "Daily Production Dashboard",
        path: "/dashboard/DailyProductionDashboard",
        icon: <MdOutlineStackedLineChart size={30} />,
        clearence: 3
      }
    ]}
    
    return (
        <div className={styles.container}>
            {items.list.map((item)=>{
              console.log(item.clearence)
                return (
                  item.clearence >= userClearence &&
                    <div key={item.title} className={styles.item}>
                        <span className={styles.icon}>{item.icon}</span>
                        <h3 className={styles.title}>{item.title}</h3>
                        <button className={styles.accessBtn}><Link href={item.path}>Access</Link></button>
                    </div>
                );
            })}
        </div>
    );
}

export default DashboardComponent;