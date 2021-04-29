import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    //console.log(context);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                { transactions.map( transactions => (
                <li className="minus">{transactions.description} <span>-RS.400</span><button className="delete-btn">X</button></li>
                ) )}
                {/* <li className="minus">Cash <span>-RS.400</span><button className="delete-btn">X</button></li> */}
            </ul>
        </>
    )
}
