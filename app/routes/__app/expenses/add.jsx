import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../../../components/expenses/ExpenseForm";
import Modal from "../../../components/util/Modal";
import { addExpense } from "../../../data/expenses.server";
import { redirect } from "@remix-run/node";
import { validateExpenseInput } from "../../../data/validation.server";

export default function AddExpensesPage() {
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

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/expenses");
}
