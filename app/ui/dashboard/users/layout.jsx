import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({children})=>{
    return (
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
