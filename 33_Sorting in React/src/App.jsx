import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './components/ExpenseData'

function App() {
  const [expenses,Setexpenses]= useState(ExpenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const[editingRowId,setEditingRowId]=useState('');

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
