import styles from "./card.module.css"
import {MdSupervisedUserCircle, MdAttachMoney,} from "react-icons/md";


const Card = ({data}) =>{
    return(
        <div className={styles.container}>
            {data.icon}
            <div className={styles.texts}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.number}>{data.number}</span>
                <span className={styles.details}>
                {data.progress!==0 ?
                (data.progress > 0 ? 
                    <><span className={styles.positive}>{data.progress}%</span> more than previous {data.timeUnit}.</> :
                    <><span className={styles.negative}>{Math.abs(data.progress)}%</span> less than previous {data.timeUnit}.</>
                ): (<span>{data.remark}</span>)
                }
                </span>
            </div>
        </div>
    );
}

export default Card

export const ChartCard = ({children}) => {
    return (
        <div className={styles.chart_container}>
            {children}
        </div>
    );
}
