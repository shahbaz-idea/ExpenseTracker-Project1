import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        { id: 1, description: 'School Fee', amount: -8000 },
        { id: 1, description: 'Salary', amount: 40000 },
        { id: 1, description: 'Utlities Bill', amount: -11000 },
        { id: 1, description: 'Grocery', amount: -15000 }
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }} >{children}
        </GlobalContext.Provider>
    );   
}