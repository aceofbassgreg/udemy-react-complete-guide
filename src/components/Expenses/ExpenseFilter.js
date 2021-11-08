import React, { useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState('2021');

  const changeHandler = (event) => {
    const year = event.target.value;
    setEnteredYear(year)
    props.onChangeDateFilter(year)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select Year:</label>
        <select
          className="expensesFilter"
          onChange={ changeHandler }
          value={ enteredYear }
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  )
};

export default ExpenseFilter;
