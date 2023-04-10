import { FaLock, FaUserPlus } from "react-icons/fa";
import { Form, Link, useSearchParams, useNavigation } from "@remix-run/react";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const authMode = searchParams.get("mode") || "login";

  const submitButtonCaption = authMode === "login" ? "Login" : "Create User";
  const toggleButtonCaption =
    authMode === "login" ? "Create New User" : "Login with Existing User";

  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Authenticating..." : submitButtonCaption}
        </button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleButtonCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
