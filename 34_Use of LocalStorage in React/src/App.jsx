import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './components/ExpenseData'
import { useLocalStorage } from '../hooks/useLocalStorage'

function App() {
  const [expenses,Setexpenses]= useLocalStorage('expenses',ExpenseData);
  const [expense, setExpense] = useLocalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });
  const[editingRowId,setEditingRowId]=useLocalStorage('editingRowId','');

  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenseForm Setexpenses={Setexpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
      <ExpenseTable expenses={expenses} setExpense={Setexpenses} setExpenses={setExpense} setEditingRowId={setEditingRowId} />
    </div>
  </main>
  )
}

export default App
