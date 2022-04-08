import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {
    const [active, setActive] = useState(false);
    const inputHandler = () => {
        setActive(true);
    };

    const x = () => {
        setActive(false)
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <p>menu</p>
            </div>
            <div onClick={inputHandler}
                className={`${styles['search-bar']} ${active && styles.active}`}>
                <AiOutlineSearch className={styles.icon} />
                <input type='text' />
            </div>
            <div>
                <p onClick={x}>To Do</p>
            </div>
        </div>
    );
}

export default SearchBar;

