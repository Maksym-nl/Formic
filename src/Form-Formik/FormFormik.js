import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Schema = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().min(6).max(32).required(),
});

const initialValues = {
  login: "",
  password: "",
};

const Input = styled(Field)`
  background-color: aqua;
  width: 350px;
`;

const FormFormik = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <div>
            <ErrorMessage name="login" />
          </div>
        </label>
        <label htmlFor="password">
          Login
          <Input type="text" name="password" />
          <div>
            <ErrorMessage name="password" />
          </div>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default FormFormik;
