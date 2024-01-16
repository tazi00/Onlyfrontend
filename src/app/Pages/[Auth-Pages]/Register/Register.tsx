import { Section } from "src/app/Components/Ui";
import "./style.scss";
import RegisterForm from "./Register.feature";

function Register() {
  return (
    <Section className="login-screen">
      <RegisterForm />
    </Section>
  );
}

export default Register;
