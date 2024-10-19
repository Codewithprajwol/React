import React, { useState } from "react";
import { useFilter } from "../../hooks/filter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ expenses, setExpense, setExpenses, setEditingRowId }) {
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
  const [contextMenu, setContextMenu] = useState({});
  const [rowId, setRowId] = useState("");
  const [dataSort, setDataSort] = useState(() => () => {});
  const total = filteredData.reduce(
    (accumulator, current) => accumulator + parseInt(current.amount),
    0
  );
  const selectChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <>
      <ContextMenu
        position={contextMenu}
        setData={setExpense}
        rowId={rowId}
        setContextMenu={setContextMenu}
        setExpenses={setExpenses}
        expenses={expenses}
        setEditingRowId={setEditingRowId}
      />
      <table
        className="expense-table"
        onClick={(e) => {
          setContextMenu({});
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={selectChange}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  onClick={() => {
                    setDataSort(() => (a, b) => a.amount - b.amount);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={() => {
                    setDataSort(() => (a, b) => b.amount - a.amount);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(dataSort).map((expense) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setContextMenu({ left: e.clientX + 5, top: e.clientY + 5 });
                setRowId(expense.id);
              }}
            >
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th className="clr-sort" onClick={() => {setDataSort(()=>()=>{})}}>
              clear Sort
            </th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;
