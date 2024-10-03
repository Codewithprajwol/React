import React, { useEffect, useRef, useState } from "react";

function ExpenseForm({ Setexpenses }) {
  // useRef Hook
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);
  // useEffect(() => {
  //   console.log(titleRef.current.value);
  //   titleRef.current.style.backgroundColor = "pink";
  // }, []);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Setexpenses((prev)=>[...prev,{...expense,id:crypto.randomUUID()}]);
    // setExpense({
    //   title:'',
    //   category:'',
    //   amount:'',
    // })
    Setexpenses((prev)=>[...prev,{
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      id:crypto.randomUUID()
    }])
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            // value={expense.title}
            ref={titleRef}
            // onChange={(e)=>{
            //  setExpense((prev)=>({...prev,title:e.target.value}))
            // }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            // value={expense.category}
            ref={categoryRef}
            // onChange={(e)=>{
            //     setExpense((prev)=>({...prev,category:e.target.value}))
            // }}
          >
            <option hidden value="">
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            // value={expense.amount}
            ref={amountRef}
            // onChange={(e) => {
            //   setExpense((prev) => ({ ...prev, amount: e.target.value }));
            // }}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
