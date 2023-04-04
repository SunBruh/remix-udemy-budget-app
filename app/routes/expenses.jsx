const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
];

import { Outlet } from "@remix-run/react";
import expensesStyles from "../styles/expenses.css";
import ExpenseList from "../components/expenses/ExpensesList";

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpenseList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
