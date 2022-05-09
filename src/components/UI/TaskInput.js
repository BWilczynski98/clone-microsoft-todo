import { useState, useContext } from 'react';
import styles from './TaskInput.module.css'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { BiCalendar, BiBell, BiRepeat } from 'react-icons/bi';
import { Store } from '../store/StoreProvider';

const TaskInput = () => {
    const { dispatch } = useContext(Store)
    const [active, setActive] = useState(false);
    const [focus, setFocus] = useState(false);
    const [icon, setIcon] = useState(<AiOutlinePlus className={styles.icon} />);
    const [task, setTask] = useState('');



    const inputHandler = () => {
        setActive(true)
        setIcon(<BsCircle className={styles.icon} />)
        setFocus(false)
    };

    const focusHandler = () => {
        setFocus(true);
        setIcon(<AiOutlinePlus className={styles.icon} />)
    };

    const taskHandler = (item) => {
        setTask(item.target.value)
    }

    const InactiveInput = () => {
        return (
            <div onClick={inputHandler} className={styles.container}>
                {icon}
                <input type='text' className={styles.input} placeholder='Add task' />

            </div>
        );
    }

    const ActiveInput = () => {
        return (
            <div className={`${styles.container} ${styles[`container-active__focus`]}`}>
                <div onClick={inputHandler} className={styles.top}>
                    {icon}
                    <input
                        type='text'
                        className={`${styles.input} ${focus && styles['input-unfocus']}`}
                        onChange={taskHandler}
                        value={task}
                        placeholder='Add task'
                    />
                </div>
                <div className={styles.bottom}>
                    <div className={styles['bottom-icons-container']}>
                        <div onClick={focusHandler}>
                            <BiCalendar className={styles.icons} />
                        </div>
                        <div onClick={focusHandler}>
                            <BiBell className={styles.icons} />
                        </div>
                        <div onClick={focusHandler}>
                            <BiRepeat className={styles.icons} />
                        </div>
                    </div>
                    <div>
                        <button className={styles['btn-task-add']} onClick={() => {
                            dispatch({ type: 'ADD', payloud: task })
                        }}>Add</button>
                    </div>
                </div>
            </div>
        );
    }

    return !active ? <InactiveInput /> : <ActiveInput />
    // return <ActiveInput />

}

export default TaskInput;