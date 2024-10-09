import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './components/ExpenseData'

function App() {
  const [expenses,Setexpenses]= useState(ExpenseData);

  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenseForm Setexpenses={Setexpenses} />
      <ExpenseTable expenses={expenses}/>
      <div className="context-menu">
          <div>Edit</div>
          <div>Delete</div>
      </div>
    </div>
  </main>
  )
}

export default App
