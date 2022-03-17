import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import {
  getUserCalendars,
  addUserCalendar,
} from "../../redux-modules/user-profile/actions";
import UserInfo from "./user-info/user-info";
import ListOfUserCalendars from "./list-of-user-calendars/list-of-user-calendars";
import AddUserCalendar from "./add-user-calendar/add-user-calendar";

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
        <AddUserCalendar
          isFirstCalendar={this.props.isFirstCalendar}
          addUserCalendar={this.props.addUserCalendar}
          userId={this.props.user.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
    calendars: state.userProfile.calendars,
    isFirstCalendar: state.userProfile.calendars[0] != null ? false : true,
  };
}

export default connect(mapStateToProps, { getUserCalendars, addUserCalendar })(
  ProfilePage
);
