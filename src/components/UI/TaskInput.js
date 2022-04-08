import { useState } from 'react';
import styles from './TaskInput.module.css'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { BiCalendar, BiBell, BiRepeat } from 'react-icons/bi';


const TaskInput = () => {
    const [active, setActive] = useState(false);
    const [focus, setFocus] = useState(false);
    const [icon, setIcon] = useState(<AiOutlinePlus className={styles.icon} />);

    const inputHandler = () => {
        setActive(true)
        setIcon(prevVal => prevVal = <BsCircle className={styles.icon} />)
        setFocus(prevVal => prevVal = false)
    };

    const focusHandler = () => {
        setFocus(true);
        setIcon(prevVal => prevVal = <AiOutlinePlus className={styles.icon} />)
    };

    if (active === false) {
        return (
            <div onClick={inputHandler} className={styles.container}>
                {icon}
                <input type='text' className={styles.input} placeholder='Add task' />

            </div>
        );
    } else {
        return (
            <div className={`${styles.container} ${styles[`container-active__focus`]}`}>
                <div onClick={inputHandler} className={styles.top}>
                    {icon}
                    <input
                        type='text'
                        className={`${styles.input} ${focus && styles['input-unfocus']}`}
                        placeholder='Add task'
                    />
                </div>
                <div className={styles.bottom}>
                    <div className={styles['bottom-icons-container']}>
                        <div onClick={focusHandler}>
                            <BiCalendar className={styles.icons} />
                        </div>
                        <div>
                            <BiBell className={styles.icons} />
                        </div>
                        <div>
                            <BiRepeat className={styles.icons} />
                        </div>
                    </div>
                    <div>
                        <button className={styles['btn-task-add']}>Add</button>
                    </div>
                </div>
            </div>
        );

    }

}

export default TaskInput;