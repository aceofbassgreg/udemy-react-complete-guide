import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterByDate = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    const year = expense.date.getFullYear();
    return year.toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenseItem) => {
      return <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date} />
      }
    )
  }

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selectedDateFilter={ filteredYear } onChangeDateFilter={ filterByDate }/>
      { expensesContent }
    </Card>
  </div>
  )
}

export default Expenses;
