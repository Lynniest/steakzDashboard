"use client"
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import { usePathname } from "next/navigation";

const Layout = ({children})=>{

    const pathname = usePathname();
    return (
        pathname === "/dashboard" ? 
        <div>
            <Navbar/>
            {children}
        </div>  :  
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
            </div>
        </div>
    );
}

export default Layout;
