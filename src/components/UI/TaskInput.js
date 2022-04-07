import styles from './TaskInput.module.css'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { BiCalendar } from 'react-icons/bi';
import { useState } from 'react';

const TaskInput = () => {
    const [active, setActive] = useState(false);

    const inputHandler = (params) => {
        setActive(true)
    }

    if (active === false) {
        return (
            <div onClick={inputHandler} className={styles.container}>
                <AiOutlinePlus className={styles.icon} />
                <input type='text' className={styles.input} placeholder='Add task' />
            </div>
        );
    } else {
        return (
            <div onClick={inputHandler} className={`${styles.container} ${styles[`container-active`]}`}>
                <BsCircle className={styles.icon} />
                <input type='text' className={styles.input} placeholder='Add task' />
                <BiCalendar />
            </div>
        );

    }

}

export default TaskInput;