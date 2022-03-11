import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import CustomModal from "../../custom-modal/custom-modal";
import CalendarCard from "../calendar-card/calendar-card";
import {
  deleteCalendar,
  copyUrl,
} from "../../../redux-modules/user-profile/actions";

class CalendarsCardsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      calendarName: null,
      calendarId: null,
    };
  }

  onDelete = (name, id) => {
    this.setState({
      calendarName: name,
      show: true,
      calendarId: id,
    });
  };

  handleSubmit = () => {
    this.props.deleteCalendar(this.props.user.id, this.state.calendarId);
    this.setState({ show: false });
  };

  handleCancel = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <ListGroup>
          {this.props.calendars.map((x) => (
            <ListGroup.Item key={x.id}>
              <CalendarCard
                id={x.id}
                name={x.name}
                url={x.url}
                onDelete={this.onDelete}
                copyUrl={this.props.copyUrl}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>

        <CustomModal
          show={this.state.show}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          title="Calendar delete"
          submitButtonText="Yes"
          cancelButtonText="No"
          cancelVariant="danger"
          submitVariant="success"
        >
          <div>
            Do you really want to remove the calendar
            <strong>
              <em> {this.state.calendarName} </em>
            </strong>
            from your list?
          </div>
        </CustomModal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { deleteCalendar, copyUrl })(
  CalendarsCardsGrid
);
