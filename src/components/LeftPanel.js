import React, { useState } from 'react';
import styles from './LeftPanel.module.css';
import { BiSun, BiStar, BiCalendar, BiHomeAlt } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const LeftPanel = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link to='myday' className={styles.link}>
                    <div>
                        <BiSun className={styles.icons} />
                        <p>My day</p>
                    </div>
                </Link>
                <Link to='important' className={styles.link}>
                    <div>
                        <BiStar className={styles.icons} />
                        <p>Important</p>
                    </div>
                </Link>
                <Link to='planned' className={styles.link}>
                    <div>
                        <BiCalendar className={styles.icons} />
                        <p>Planned</p>
                    </div>
                </Link>
                <Link to='assigned_to_me' className={styles.link}>
                    <div>
                        <BsPerson className={styles.icons} />
                        <p>Assigned to me</p>
                    </div>
                </Link>
                <Link to='task' className={styles.link}>
                    <div>
                        <BiHomeAlt className={styles.icons} />
                        <p>Task</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default LeftPanel;