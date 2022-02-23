import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { login } from "../../redux-modules/auth/actions";
import * as Yup from "yup";
import "./auth.scss";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

class LoginForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.login(values.email, values.password);
    resetForm({ values: "" });
  };

  render() {
    if (this.props.user.isAuth) {
      return <Navigate to="/" />;
    }
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={this.handleSubmit}
      >
        {() => {
          return (
            <Form className="auth-form">
              <label>Email</label>
              <Field type="email" name="email" />

              <ErrorMessage className="error" name="email" component="div" />

              <label>Password</label>
              <Field type="password" name="password" />

              <ErrorMessage className="error" name="password" component="div" />

              <button className="login" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { login })(LoginForm);
