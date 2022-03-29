import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./add-user-calendar-form.scss";

function AddUserCalendar(props) {
  const addCalendarSchema = Yup.object().shape({
    url: Yup.string()
      .matches(/^.*\.ics$/, "Url must is end by .ics")
      .required("Url is required"),

    name:
      props.isFirstCalendar === false
        ? Yup.string()
            .required("Required !")
            .min(2, "Min 2 symbols!")
            .max(80, "Max 80 symbols!")
        : Yup.string(),
  });

  function submit(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    props.addUserCalendar(props.userId, values.name, values.url);
    resetForm({ values: "" });
    setSubmitting(false);
  }

  return (
    <Card className="add-calendar-form">
      <Formik
        initialValues={{ name: "", url: "" }}
        validationSchema={addCalendarSchema}
        onSubmit={submit}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          values,
          touched,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="add-calendar-form-content">
            {props.isFirstCalendar === true ? (
              <></>
            ) : (
              <Form.Group controlId="formName" className="input-field">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? "error" : null}
                />
                {touched.name && errors.name ? (
                  <div className="error-message">{errors.name}</div>
                ) : null}
              </Form.Group>
            )}

            <Form.Group controlId="formUrl" className="input-field">
              <Form.Control
                type="text"
                name="url"
                placeholder="Url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
                className={touched.url && errors.url ? "error" : null}
              />
              {touched.url && errors.url ? (
                <div className="error-message">{errors.url}</div>
              ) : null}
            </Form.Group>

            <Button
              variant="primary"
              className="add-calendar-button"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default AddUserCalendar;
