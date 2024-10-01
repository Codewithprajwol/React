import React from 'react'

function ExpenseForm({Setexpenses}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const expense={... getFormData(e.target),id:crypto.randomUUID()};
       Setexpenses((prev)=>[...prev,expense]);
       e.target.reset();
    }
    const getFormData=(Form)=>{
        const Formdata=new FormData(Form);
        const data={}
        for(const [key,value] of Formdata.entries()){
            data[key]=value;
        }
        console.log(data);
       return data;
    }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
  <div className="input-container">
    <label htmlFor="title">Title</label>
    <input id="title" name='title' />
  </div>
  <div className="input-container">
    <label htmlFor="category">Category</label>
    <select id='category' name='category'>
              <option hidden value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
  </div>
  <div className="input-container">
    <label htmlFor="amount">Amount</label>
    <input id="amount" name='amount'/>
  </div>
  <button className="add-btn">Add</button>
</form>

  )
}

export default ExpenseForm
