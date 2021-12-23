import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setFormState(!formState)
    props.onAddExpense(expenseData);
  }

  const [formState, setFormState] = useState(false);

  const formStateHandler = () => {
    setFormState(!formState)
  }

  const renderedComponent = () => {
    if (formState) {
      return <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
    } else {
      return <button onClick={ formStateHandler }>Add New Expense</button>
    }
  }

  return (
    <div className="new-expense">
      { renderedComponent() }
    </div>
  )
}

export default NewExpense;
