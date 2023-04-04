import authStyles from "../styles/auth.css";
import AuthForm from "../components/auth/AuthForm";

export default function AuthPage() {
  return <AuthForm />;
}

export const links = () => {
  return [{ rel: "stylesheet", href: authStyles }];
};
