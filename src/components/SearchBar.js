import React, { useState, useContext } from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <p>menu</p>
            </div>
            <div
                className={`${styles['search-bar']}`}>
                <AiOutlineSearch className={styles.icon} />
                <input type='text' />
            </div>
            <div>
                <p>To Do</p>
            </div>
        </div>
    );
}

export default SearchBar;

