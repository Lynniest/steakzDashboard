import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
    return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            <di>Yeh Shuhua</di>
                    </td>
                    <td>
                        <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                    </td>
                    <td>17.11.2023</td>
                    <td>208000</td>
                </tr>
                <tr>
                    <td className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                        <span>Yeh Shuhua</span>
                    </td>
                    <td>
                        <span className={`${styles.cancelled} ${styles.status}`}>Cancelled</span>
                    </td>
                    <td>17.11.2023</td>
                    <td>208000</td>
                </tr>
                <tr>
                    <td className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                        <span>Yeh Shuhua</span>
                    </td>
                    <td>
                        <span className={`${styles.done} ${styles.status}`}>Completed</span>
                    </td>
                    <td>17.11.2023</td>
                    <td>208000</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    );
}

export default Transactions;