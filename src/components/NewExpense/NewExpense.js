import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEdititng] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdititng(false);
  };

  const startEdititngHandler = () => {
    setIsEdititng(true);
  };
  const stopEdititngHandler = () => {
    setIsEdititng(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEdititngHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdititngHandler} />}
    </div>
  );
}

export default NewExpense;
