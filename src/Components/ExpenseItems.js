import React, { useState } from "react";
import "./ExpenseItems.css";
import Card from "./Card.js";
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses";
function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-tem__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> change Title</button>
    </Card>
  );
}
export default ExpenseItems;
