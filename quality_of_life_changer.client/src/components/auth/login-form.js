import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { login } from "../../redux-modules/auth/actions";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

class LoginForm extends Component {
  handleSubmit = (values) => {
    this.props.login(values.email, values.password);
  };

  render() {
    if (this.props.user.isAuth) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {() => {
            return (
              <Form>
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

export default connect(update, { login })(LoginForm);
