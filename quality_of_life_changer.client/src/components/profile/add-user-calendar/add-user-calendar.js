import { ReactComponent as Plus } from "./plus.svg";
import React from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import "./add-user-calendar.scss";

function AddUserCalendar() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <div type="button" onClick={decoratedOnClick}>
        <Plus className="button-plus" />
      </div>
    );
  }

  return (
    <Accordion flush className="add-calendar-card">
      <Card>
        <CustomToggle eventKey="0" />
      </Card>
      <Accordion.Collapse eventKey="0">
        <Card>Hello! I'm the body</Card>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default AddUserCalendar;
