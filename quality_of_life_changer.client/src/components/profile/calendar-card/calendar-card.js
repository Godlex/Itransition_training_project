import { Component } from "react";
import { connect } from "react-redux";
import "./calendar-card.scss";
import { ReactComponent as Copy } from "./copy.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { deleteCalendar } from "../../../redux-modules/user-profile/actions";
import { toastr } from "react-redux-toastr";

class CalendarCard extends Component {
  copy = async () => {
    toastr.info("Copied", this.props.url);
    await navigator.clipboard.writeText(this.props.url);
  };

  delete = () => {
    toastr.confirm(`Delete Calendar "${this.props.name}"?`, {
      onOk: () => this.props.deleteCalendar(this.props.user.id, this.props.id),
      okText: "Yes",
      cancelText: "No",
    });
  };

  render() {
    return (
      <div className="user-calendar-card">
        <div className="user-calendar-name">{this.props.name}</div>
        <div className="button-bar">
          <Copy className="button-copy-url" onClick={this.copy} />
          <Delete className="button-delete-calendar" onClick={this.delete} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { deleteCalendar })(CalendarCard);
