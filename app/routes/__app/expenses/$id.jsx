import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../../../components/expenses/ExpenseForm";
import Modal from "../../../components/util/Modal";
import { deleteExpense, updateExpense } from "../../../data/expenses.server";
import { redirect } from "@remix-run/node";
import { validateExpenseInput } from "../../../data/validation.server";
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
export const action = async ({ params, request }) => {
  const expenseId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    await updateExpense(expenseId, expenseData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    return redirect(`/expenses`);
  } else {
    await deleteExpense(expenseId);
    return { deleteId: expenseId };
  }
};
