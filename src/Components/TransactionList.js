import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    //console.log(context);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                { transactions.map( transaction => (
                <Transaction key={transaction.id} transaction={transaction}></Transaction>
                ) )}
                {/* <li className="minus">Cash <span>-RS.400</span><button className="delete-btn">X</button></li> */}
            </ul>
        </>
    )
}
