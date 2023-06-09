import authStyles from "../../styles/auth.css";
import AuthForm from "../../components/auth/AuthForm";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action(request) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = request.formData();
  const credentials = Object.fromEntries(formData);

  if (authMode === "login") {
    // login logic
  } else {
    // signup logic
  }
}

export const links = () => {
  return [{ rel: "stylesheet", href: authStyles }];
};
