import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../../../components/expenses/ExpenseForm";
import Modal from "../../../components/util/Modal";
// import { getSingleExpense } from "../../../data/expenses.server";

export default function UpdateExpensePage() {
  const navigate = useNavigate();

  function closerHandler() {
    navigate("..");
  }
  return (
    <Modal onClose={closerHandler}>
      <ExpenseForm />
    </Modal>
  );
}

// export const loader = async ({ params }) => {
//   console.log("Expense I loader");
//   const expenseId = params.id;
//   const singleExpense = await getSingleExpense(expenseId);
//   return singleExpense;
// };
