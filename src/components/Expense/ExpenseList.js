import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ filterItems, filterYear }) => {
    return (
        <>
            {filterItems.length === 0 && <h2 className='expenses-list__fallback' style={{ margin: '20px 0px 0px 0px' }}>No records found in {filterYear}</h2>}
            {filterItems.length !== 0 && <ul className='expenses-list'>
                {
                    filterItems.map(e => (
                        <ExpenseItem key={e.id} data={e} />
                    ))}
            </ul>}
        </>
    )
}

export default ExpenseList
