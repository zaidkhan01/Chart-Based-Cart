import "./App.css";
import React, { useState } from "react";
import NewExpenses from "./Components/Expenses/NewExpenses";
import Expenses from "./Components/Expenses";

const dummyexpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpenses] = useState(dummyexpense);

  const addExpenseHandler = (expense) => {
    // console.log("IN app JS!!");
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    // Alternative

    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses item={expense} />
    </div>
    // React.createElement(
    //   "div",
    //   {},
    //   React.createElement(
    //     "h2",
    //     {},
    //     "Lets get started!!",
    //     React.createElement(Expenses, { item: expense })
    //   )
  );
}

export default App;
