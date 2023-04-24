import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expense.css'
import ExpenseChart from './ExpenseChart'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const Expense = ({ items }) => {

    const [filterYear, setFilterYear] = useState()

    const filterItems = filterYear ? items.filter(e => e.date.getFullYear().toString() === filterYear) : items

    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter filterYear={filterYear} setFilterYear={setFilterYear} />
                <ExpenseChart expenses={filterItems} />
                <ExpenseList filterItems={filterItems} filterYear={filterYear} />
            </Card>
        </>
    )
}

export default Expense
