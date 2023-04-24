import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const [add, setAdd] = useState(false)

    const saveExpenseDataHandler = (expenseData) => {
        const _expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(_expenseData)
    }

    const startAdd = () => {
        setAdd(true)
    }

    const stopAdd = () => {
        setAdd(false)
    }

    return (
        <>
            <div className="new-expense">
                {!add && <button onClick={startAdd}>Add New Expenses</button>}
                {add && <ExpenseForm onExpenseData={saveExpenseDataHandler} onCancel={stopAdd} />}
            </div>
        </>
    )
}

export default NewExpense
