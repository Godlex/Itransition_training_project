import { Component } from "react";
import "./calendar-card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faX } from "@fortawesome/free-solid-svg-icons";

class CalendarCard extends Component {
  copy = async () => {
    console.log("copy");
    await navigator.clipboard.writeText(this.props.url);
  };

  delete = async () => {
    console.log("delete");
  };

  render() {
    return (
      <div className="user-calendar-card">
        <div>{this.props.name}</div>
        <div className="button-bar">
          <FontAwesomeIcon
            className="button-copy"
            onClick={this.copy}
            icon={faCopy}
          />

          <FontAwesomeIcon
            className="button-delete"
            onClick={this.delete}
            icon={faX}
          />
        </div>
      </div>
    );
  }
}

export default CalendarCard;
