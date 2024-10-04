import React, { useState } from 'react'

function ExpenseForm({Setexpenses}) {
  const [error,setError]=useState({});
  const [expense,setExpense]=useState({
    title:'',
    category:'',
    amount:'',
  })
  const changeHandle=(e)=>{
     let {name,value}=e.target;
      setExpense((prev)=>({...prev,[name]:value}))
      setError({});        
  }
  const validate=(formData)=>{
    const errorsData={}
    if(!formData.title){
        errorsData.title="title is required";
    }
    if(!formData.category){
        errorsData.category="category is required";
    }
    if(!formData.amount){
        errorsData.amount="amount is required";
    }
    return errorsData;
  }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateResult=validate(expense);
        setError(validateResult)
        if(Object.keys(validateResult).length) return;
        Setexpenses((prev)=>[...prev,{...expense,id:crypto.randomUUID()}]);
        setExpense({
          title:'',
          category:'',
          amount:'',
        })
    }
   
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
  <div className="input-container">
    <label htmlFor="title">Title</label>
    <input id="title" name='title' value={expense.title} onChange={changeHandle}/>
  <p className='error-part'>{error.title}</p>
  </div>
  <div className="input-container">
    <label htmlFor="category">Category</label>
    <select id='category' name='category' value={expense.category} onChange={changeHandle}>
              <option hidden value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
  <p className='error-part'>{error.category}</p>
  </div>
  <div className="input-container">
    <label htmlFor="amount">Amount</label>
    <input id="amount" name='amount' value={expense.amount} onChange={changeHandle}/>
  <p className='error-part'>{error.amount}</p>

  </div>
  <button className="add-btn">Add</button>
</form>

  )
}

export default ExpenseForm
