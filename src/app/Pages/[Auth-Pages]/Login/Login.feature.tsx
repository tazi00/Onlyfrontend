import { useState } from "react";
import { Form } from "src/app/Components";

function LoginForm() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const loginForm = [
    {
      label: "Email",
      placeholder: "Enter Your Email",
      type: "email",
      name: "email",
      value: loginCredentials.email,
    },
    {
      label: "Password",
      placeholder: "Enter Your Password",
      type: "password",
      name: "password",
      value: loginCredentials.password,
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted:", loginCredentials);
  }

  return (
    <Form
      title="Login"
      data={loginForm}
      onsubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default LoginForm;
