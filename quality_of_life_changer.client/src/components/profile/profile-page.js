import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import CalendarsCardsGrid from "./calendars-card-grid/calendars-card-grid";
import { getUserCalendars } from "../../redux-modules/calendars/actions";
import "./profile-page.scss";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    console.log("id-", this.props.user.id);
    if (this.props.user.id != null) {
      this.props.getUserCalendars(this.props.user.id);
    }
  }
  render() {
    if (!this.props.user.isAuth) {
      return <Navigate to="/login" />;
    }
    console.log("calendars-", this.props.calendars);
    if (this.props.calendars[0] == null) {
      return (
        <div>
          <div className="user-info">
            <div>
              <h1 className="user-name">{this.props.user.name}</h1>
              <div className="user-email">Email - {this.props.user.email}</div>
            </div>
          </div>
          <h1 className="user-calendars">You don't have calendars </h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="user-info">
            <div>
              <h1 className="user-name">{this.props.user.name}</h1>
              <div className="user-email">Email - {this.props.user.email}</div>
            </div>
          </div>
          <h1 className="user-calendars">Your calendars</h1>
          <CalendarsCardsGrid calendars={this.props.calendars} />;
        </div>
      );
    }
  }
}

function update(state) {
  return {
    user: { ...state.auth.user },
    calendars: state.calendars.calendars,
  };
}

export default connect(update, { getUserCalendars })(ProfilePage);
