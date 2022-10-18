import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card.js";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./Expenses/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />

        {/* <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-tem__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div> */}
        {/* <ExpenseItems
        id={props.item[0].id}
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItems>
      <ExpenseItems
        id={props.item[1].id}
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItems>
      <ExpenseItems
        id={props.item[2].id}
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItems>
      <ExpenseItems
        id={props.item[3].id}
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItems> */}
      </Card>
    </div>
  );
};
export default Expenses;
