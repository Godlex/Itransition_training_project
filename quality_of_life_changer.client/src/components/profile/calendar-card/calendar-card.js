import { Component } from "react";
import "./calendar-card.scss";
import { ReactComponent as Copy } from "./copy.svg";
import { ReactComponent as Delete } from "./delete.svg";

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
          <Copy className="button-copy" onClick={this.copy} />

          <Delete className="button-delete" onClick={this.delete} />
        </div>
      </div>
    );
  }
}

export default CalendarCard;
