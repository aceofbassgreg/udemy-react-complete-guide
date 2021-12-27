import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setFormVisibility(!formVisibility)
    props.onAddExpense(expenseData);
  }

  const [formVisibility, setFormVisibility] = useState(false);

  const formVisibilityHandler = () => {
    setFormVisibility(!formVisibility)
  }

  const renderedComponent = () => {
    if (formVisibility) {
      return <ExpenseForm
        onCancel={ formVisibilityHandler }
        onSaveExpenseData={ saveExpenseDataHandler }
      />
    } else {
      return <button onClick={ formVisibilityHandler }>Add New Expense</button>
    }
  }

  return (
    <div className="new-expense">
      { renderedComponent() }
    </div>
  )
}

export default NewExpense;
