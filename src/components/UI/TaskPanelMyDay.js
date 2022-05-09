import React, { useContext } from 'react';
import styles from './TaskPanelMyDay.module.css';
import { BiSortAlt2, BiDotsHorizontalRounded } from 'react-icons/bi';
import { Store } from '../store/StoreProvider';



const TaskPanelHeader = ({ title }) => {
    const { date } = useContext(Store);
    const { dayName, dayOfMonth, monthName } = date;

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles['title-container']}>
                    <h2 className={styles.title}>{title} <BiDotsHorizontalRounded /></h2>
                </div>
                <div className={styles['date-container']}>
                    <p><span className={styles.date}>{dayName}, {dayOfMonth} {monthName}</span></p>
                </div>
            </div>
            <div>
                <button className={styles['btn-sort']}><BiSortAlt2 className={styles.icon} />Sort</button>
            </div>
        </div>
    );
}

export default TaskPanelHeader;