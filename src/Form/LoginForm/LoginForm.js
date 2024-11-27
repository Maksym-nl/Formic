import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const initialValues = {
  login: " ",
  password: " ",
};
const Input = styled(Field)`
  background-color: aqua;
  width: 350px;
`;
const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValue={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
        </label>

        <label htmlFor="password">
          Password
          <Input type="text" name="password" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
