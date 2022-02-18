import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import CalendarsCardsGrid from "./calendars-card-grid/calendars-card-grid";
import { getUserCalendars } from "../../redux-modules/user-profile/actions";
import "./profile-page.scss";
import { Accordion } from "react-bootstrap";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    if (this.props.user.id != null) {
      this.props.getUserCalendars(this.props.user.id);
    }
  }
  render() {
    if (!this.props.user.isAuth) {
      return <Navigate to="/login" />;
    }
    if (this.props.calendars[0] == null) {
      return (
        <div>
          <div className="user-info">
            <div>
              <h1 className="user-name">{this.props.user.name}</h1>
              <div className="user-email">Email - {this.props.user.email}</div>
            </div>
          </div>
          <Accordion flush className="user-calendars">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>Your calendars</h3>
              </Accordion.Header>
              <Accordion.Body>You don't have calendars </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
          <Accordion flush className="user-calendars">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>Your calendars</h3>
              </Accordion.Header>
              <Accordion.Body>
                <CalendarsCardsGrid calendars={this.props.calendars} />;
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
    calendars: state.userProfile.calendars,
  };
}

export default connect(mapStateToProps, { getUserCalendars })(ProfilePage);
