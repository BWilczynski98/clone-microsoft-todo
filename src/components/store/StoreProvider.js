import React, { createContext, useReducer } from 'react';
import { date } from './Date';


export const Store = createContext();

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'ADD':
            console.log('It work!');
            console.log(state);
        default:
            return state
    }
}


const StoreProvider = ({ children }) => {
    const tasks = []
    const [state, dispatch] = useReducer(reducerFn, tasks)
    const store = {
        date,
        tasks,
        dispatch,
    }
    return (
        <Store.Provider value={store}>
            {children}
        </Store.Provider>
    );
}

export default StoreProvider;