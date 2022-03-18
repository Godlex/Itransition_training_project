import { Button, useAccordionButton } from "react-bootstrap";
import { ReactComponent as Plus } from "../plus.svg";
import React from "react";
import "./custom-toggle.scss";

function CustomToggle(props) {
  const decoratedOnClick = useAccordionButton(props.eventKey);

  return (
    <Button
      type="button"
      onClick={decoratedOnClick}
      variant="success"
      className="custom-toggle-button"
    >
      <Plus className="icon" />
      <b className="text">Add calendar</b>
    </Button>
  );
}

export default CustomToggle;
