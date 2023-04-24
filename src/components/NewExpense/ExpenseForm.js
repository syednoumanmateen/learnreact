import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onExpenseData, onCancel }) => {
    const [title, setTile] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // const [userInput, setUserInput] = {
    //     title: '',
    //     amount: '',
    //     date: ''
    // }

    // const inputChangeHandler = () => {
    //     setUserInput({...userInput,[e.target.name]:e.target.value})
    // }

    const titleChangeHandler = e => {
        setTile(e.target.value)
    }

    const amountChangeHandler = e => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = e => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (title && amount && date) {
            const expenseData = {
                title, amount:+amount, date: new Date(date)
            }
            onExpenseData(expenseData)
            setTile('')
            setAmount('')
            setDate('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name='title' value={title} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name='amount' value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name='date' value={date} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
