import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenseForm({ Setexpenses }) {
  const [error, setError] = useState({});
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const changeHandle = (e) => {
    let { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
    setError({});
  };

  const validateConfig = {
    title: [
      { required: true, message: "title is required" },
      {
        minlength: 5,
        message: "Title should be at Least 5 character long",
      },
    ],
    category: [{ required: true, message: "category is required" }],
    amount: [{ required: true, message: "amount is required" }],
    // email: [
    //   {
    //     required: true,
    //     message: "Email is required",
    //   },
    //   {
    //     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message:"please Enter the valied email"
    //   }
    // ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).some(([key, value]) => {
      validateConfig[key].forEach((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minlength && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
        // if(rule.pattern && !rule.pattern.test(value)){
        //   errorsData[key]=rule.message;
        //   return true;
        // }
      });
    });

    return errorsData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    setError(validateResult);
    if (Object.keys(validateResult).length) return;
    Setexpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onchange={changeHandle}
        error={error.title}
      />

      <Select
        category="category"
        id="category"
        name="category"
        onchange={changeHandle}
        value={expense.category}
        error={error.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onchange={changeHandle}
        error={error.amount}
      />

      {/* <Input
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onchange={changeHandle}
        error={error.email}
      /> */}

      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
