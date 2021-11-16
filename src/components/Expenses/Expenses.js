import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const filterByDate = (year) => {
    console.log(year)
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter onChangeDateFilter={ filterByDate }/>
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
  </div>
  )
}

export default Expenses;
