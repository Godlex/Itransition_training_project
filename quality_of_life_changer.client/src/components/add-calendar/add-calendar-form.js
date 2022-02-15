import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { addCalendar } from "../../redux-modules/user-profile/actions";
import * as Yup from "yup";

const addCalendarShema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(80, "Too Long!"),
  url: Yup.string()
    .matches(/^.*\.ics$/, "Url must is end with .ics")
    .required("Required"),
});

class AddCalendarForm extends Component {
  handleSubmit = (values) => {
    this.props.addCalendar(values.name, values.url);
  };

  render() {
    if (!this.props.user.isAuth) {
      return <Navigate to="/" />;
    }
    return (
      <Formik
        initialValues={{ name: "", url: "" }}
        validationSchema={addCalendarShema}
        onSubmit={this.handleSubmit}
      >
        {() => {
          return (
            <Form className="auth-form">
              <h1>Add new calendar</h1>
              <label>Name</label>
              <Field name="name" />

              <ErrorMessage className="error" name="name" component="div" />

              <label>Url</label>
              <Field name="url" />

              <ErrorMessage className="error" name="url" component="div" />

              <button className="submit" type="submit">
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

export default connect(mapStateToProps, { addCalendar })(AddCalendarForm);
