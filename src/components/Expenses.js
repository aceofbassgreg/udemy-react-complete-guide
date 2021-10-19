import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {

  return (
    <div className="expenses">
    {
      props.expenses.map(expenseItem => {
        return(
          <ExpenseItem title={expenseItem.title}
                       amount={expenseItem.amount}
                       date={expenseItem.date} />
        )
    })
    }
    </div>
  )
}

export default Expenses;
