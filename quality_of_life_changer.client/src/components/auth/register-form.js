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
  handleSubmit = (values, { resetForm }) => {
    this.props.register(
      values.userName,
      values.email,
      values.password,
      values.confirmPassword
    );
    resetForm({ values: "" });
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
              <Form className="auth-form">
                <label>Name</label>
                <Field type="string" name="userName" />
                <ErrorMessage
                  className="error"
                  name="userName"
                  component="div"
                />

                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage className="error" name="email" component="div" />

                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />

                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage
                  className="error"
                  name="confirmPassword"
                  component="div"
                />

                <button className="submit" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { register })(RegisterForm);
