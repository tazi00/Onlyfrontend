import { useState } from "react";
import { Form } from "src/app/Components";

function RegisterForm() {
  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const registerForm = [
    {
      label: "Username",
      placeholder: "Enter Your Username",
      type: "text",
      name: "username",
      value: registerCredentials.username,
    },
    {
      label: "Email",
      placeholder: "Enter Your Email",
      type: "email",
      name: "email",
      value: registerCredentials.email,
    },
    {
      label: "Password",
      placeholder: "Enter Your Password",
      type: "password",
      name: "password",
      value: registerCredentials.password,
    },
    {
      label: "Confirm Password",
      placeholder: "Enter Your Confirm password",
      type: "password",
      name: "confirmPassword",
      value: registerCredentials.confirmPassword,
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRegisterCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted:", registerCredentials);
  }
  return (
    <Form
      title="Register"
      data={registerForm}
      onsubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default RegisterForm;
