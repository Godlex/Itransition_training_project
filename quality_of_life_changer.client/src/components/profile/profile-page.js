import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { getUserCalendars } from "../../redux-modules/user-profile/actions";
import "./profile-page.scss";
import UserInfo from "./user-info/user-info";
import ListOfUserCalendars from "./list-of-user-calendars/list-of-user-calendars";

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

    return (
      <div>
        <UserInfo name={this.props.user.name} email={this.props.user.email} />
        <ListOfUserCalendars calendars={this.props.calendars} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
    calendars: state.userProfile.calendars,
  };
}

export default connect(mapStateToProps, { getUserCalendars })(ProfilePage);
