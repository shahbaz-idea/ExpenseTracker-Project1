import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus' }>
            {transaction.description} <span>{sign}RS {Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
} 