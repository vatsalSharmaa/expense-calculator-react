import React, {useState} from 'react';
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  const filteredExpenses = props.items.filter((expense) => {
    //console.log(expense.date.getFullYear());
    //console.log(filteredYear);
    // console.log(new Date(expense.date))
    return expense.date.getFullYear().toString() === filteredYear;
    //return true;
  });
  //you can use jsx not just only in return statement

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {/* {filteredExpenses === 0 && <p>no expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          <ExpensesChart expenses ={filteredExpenses}/>
          <ExpenseList items= {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
