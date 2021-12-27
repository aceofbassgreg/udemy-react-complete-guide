import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
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

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selectedDateFilter={ filteredYear } onChangeDateFilter={ filterByDate }/>
      <ExpensesChart expenses={ filteredExpenses } />
      <ExpensesList items={ filteredExpenses } />
    </Card>
  </div>
  )
}

export default Expenses;
