"use client"
import { fetchMockUserData } from "@/app/lib/placeholderData";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdCollections,
  MdAutoAwesomeMosaic,
  MdOutlineStackedLineChart,
  MdOutlineTrendingUp,
  MdDashboardCustomize,
} from "react-icons/md";
import Image from "next/image";
import { arrangeClearenceLvl } from "@/app/lib/util";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Bussiness Performance Dashboard",
        path: "/dashboard/BussinessPerformanceDashboard",
        icon: <MdOutlineTrendingUp />,
        clearence: 1
        
      },
      {
        title: "Company Plan Performance Dashboard",
        path: "/dashboard/CompanyPlanPerformanceDashboard",
        icon: <MdDashboardCustomize />,
        clearence: 1
      },
      {
        title: "HR Recruitment Dashboard",
        path: "/dashboard/HR_RecruitmentDashboard",
        icon: <MdPeople />,
        clearence: 2
      },
      {
        title: "Decision Support Dashboard",
        path: "/dashboard/DecisionSupportDashboard",
        icon: <MdDashboard/>,
        clearence: 2
      },
      {
        title: "Sales Dashboard",
        path: "/dashboard/SalesDashboard",
        icon: <MdAttachMoney />,
        clearence: 3
      },
      {
        title: "Daily Production Dashboard",
        path: "/dashboard/DailyProductionDashboard",
        icon: <MdOutlineStackedLineChart />,
        clearence: 3
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
        clearence: 0.5
      },
    ],
  },
  
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];


const Sidebar = () =>{

    const user = fetchMockUserData();
    console.log(user)
    const userClearence = arrangeClearenceLvl(user.roleCategory)
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src={"/noavatar.png"} alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>{user.role}</span>
                </div>
            </div>

            <ul>
                {menuItems.map( (cata)=>{
                return(
                    <li key={cata.title}>
                        <span className={styles.cat}>
                            {cata.title}
                        </span>
                        {cata.list.map((item)=>{
                          if(item.clearence >= userClearence){
                            return (<MenuLink item={item} key={item.title}/>);
                            
                          }
                          
                        })}
                    </li>
                );
            } )}
            </ul>
            <form action="">
              <button className={styles.logout}>
                <MdLogout/><span className={styles.title}>Logout</span>
              </button>
            </form>

        </div>
    );
}

export default Sidebar;   