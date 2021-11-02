import React, { useState } from "react"; // Not compulsory
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import NewExpenses from "./components/Expenses/NewExpenses";

const Initial_Data = [
  {
    id: "e1",
    title: "Vegetables",
    amount: 100,
    date: new Date(2021, 7, 24),
  },
  {
    id: "e2",
    title: "Table",
    amount: 1200,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e3",
    title: "Chair",
    amount: 3300,
    date: new Date(2021, 7, 16),
  },
  {
    id: "e4",
    title: "Bitcoin",
    amount: 1000,
    date: new Date(2021, 7, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Initial_Data);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App-header">
      <NewExpense onAddExpense={addExpenseHandler} />
      <NewExpenses items={expenses} />
    </div>
  );
}

export default App;
