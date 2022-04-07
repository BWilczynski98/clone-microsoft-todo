import React, { useState } from 'react';
import TaskInput from '../UI/TaskInput';
import styles from './MyDay.module.css';


const MyDay = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <TaskInput />
            </div>
        </>

    );
}

export default MyDay;