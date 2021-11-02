import React, { useState } from "react";
import "./NewExpenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function NewExpenses(props) {
  const [enteredYear, setEnteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default NewExpenses;
