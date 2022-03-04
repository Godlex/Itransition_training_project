import { Component } from "react";
import "./calendar-card.scss";
import { ReactComponent as Copy } from "./copy.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { toastr } from "react-redux-toastr";

export class CalendarCard extends Component {
  onCopy = async () => {
    toastr.info("Copied", this.props.url);
    await navigator.clipboard.writeText(this.props.url);
  };

  onDelete = () => {
    this.props.onDelete(this.props.name, this.props.id);
  };

  render() {
    return (
      <div>
        <div className="user-calendar-card">
          <div className="user-calendar-name">{this.props.name}</div>
          <div className="button-bar">
            <Copy className="button-copy-url" onClick={this.onCopy} />
            <Delete
              className="button-delete-calendar"
              onClick={this.onDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarCard;
