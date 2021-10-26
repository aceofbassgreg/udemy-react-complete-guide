import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // we use const because we never assign a new title; we re-evaluate the component function when state changes
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ clickHandler }>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
