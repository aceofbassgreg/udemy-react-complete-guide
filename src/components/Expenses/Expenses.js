import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {

  return (
    <Card className="expenses">
    {
      props.expenses.map(expenseItem => {
        return(
          <ExpenseItem title={expenseItem.title}
                       amount={expenseItem.amount}
                       date={expenseItem.date} />
        )
    })
    }
    </Card>
  )
}

export default Expenses;
