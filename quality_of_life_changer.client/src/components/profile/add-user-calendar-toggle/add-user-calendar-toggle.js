import { Button } from "react-bootstrap";
import { ReactComponent as Plus } from "./plus.svg";
import React from "react";
import "./add-user-calendar-toggle.scss";

function AddUserCalendarToggle(props) {
  return (
    <Button
      type="button"
      onClick={props.onClick}
      variant="success"
      className="custom-toggle-button"
    >
      <Plus className="icon" />
      <b className="text">Add calendar</b>
    </Button>
  );
}

export default AddUserCalendarToggle;
