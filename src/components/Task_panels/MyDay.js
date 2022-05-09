import React, { useState } from 'react';
import TaskInput from '../UI/TaskInput';
import styles from './MyDay.module.css';
import TaskPanelMyDay from '../UI/TaskPanelMyDay'


const MyDay = ({ title }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <TaskPanelMyDay title={title} />
                <TaskInput />
            </div>
        </>

    );
}

export default MyDay;