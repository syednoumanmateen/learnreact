import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2021, 7, 14)
}, {
  id: 'e2',
  title: 'Car Insurence',
  amount: 294.97,
  date: new Date(2019, 5, 28)
}, {
  id: 'e3',
  title: 'New TV',
  amount: 799.97,
  date: new Date(2021, 8, 21)
}, {
  id: 'e4',
  title: 'New Desk',
  amount: 450,
  date: new Date(2020, 5, 20)
}]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (e) => {
    setExpenses(i => [e, ...i])
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </>
  );
}

export default App;
