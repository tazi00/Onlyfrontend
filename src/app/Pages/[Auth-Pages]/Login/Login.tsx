import { Section } from "src/app/Components/Ui";
import "./style.scss";
import LoginForm from "./Login.feature";

function Login() {
  return (
    <Section className="login-screen">
      <LoginForm />
    </Section>
  );
}

export default Login;
