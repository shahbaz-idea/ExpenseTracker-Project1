import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" class="money plus">+RS.0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" class="money minus">+RS.0.00</p>
            </div>
        </div>
    )
}
