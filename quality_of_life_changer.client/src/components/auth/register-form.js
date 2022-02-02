import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { register } from "../../redux-modules/auth/actions";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  email: Yup.string().email("Invalid email").required("Required"),
});

class RegisterForm extends Component {
  handleSubmit = (values) => {
    this.props.register(
      values.userName,
      values.email,
      values.password,
      values.confirmPassword
    );
  };

  render() {
    if (this.props.user.isAuth) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={this.handleSubmit}
        >
          {() => {
            return (
              <Form>
                <label>
                  Name
                  <Field type="string" name="userName" />
                  <ErrorMessage name="userName" component="div" />
                </label>
                <label>
                  Email
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
                <label>
                  Confirm Password
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" />
                </label>
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

function update(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(update, { register })(RegisterForm);
