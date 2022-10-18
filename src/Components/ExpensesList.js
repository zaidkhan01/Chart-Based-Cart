import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <ul className="expense-list">
      {props.item.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
