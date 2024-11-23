import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 shadow-md hover:bg-slate-50 md:px-8">
      <img src={viteLogo} alt="logo" />
      <ul className="flex gap-5">
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "cursor-pointer text-blue-700 underline";
              }
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "cursor-pointer text-blue-700 underline";
              }
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "cursor-pointer text-blue-700 underline";
              }
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Sign In
          </button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            {" "}
            <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
              <input
                placeholder="Username"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
              <input
                placeholder="Password"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="password"
              />
            </div>
          </Modal>
        </li>
      </ul>
    </header>
  );
}

export default Header;
