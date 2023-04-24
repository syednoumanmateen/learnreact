import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({ filterYear, setFilterYear }) => {

    const onChangeHandler = (e) => {
        setFilterYear(e.target.value)
    }

    return (
        <>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter the List</label>
                    <select value={filterYear} onChange={onChangeHandler}>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default ExpenseFilter
