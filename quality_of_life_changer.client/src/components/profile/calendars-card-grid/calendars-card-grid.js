import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import CustomModal from "../../custom-modal/custom-modal";
import CalendarCard from "../calendar-card/calendar-card";
import { deleteCalendar } from "../../../redux-modules/user-profile/actions";

class CalendarsCardsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: null,
      calendarId: null,
    };
  }

  onDelete = (name, id) => {
    this.setState({
      message: (
        <div>
          Do you really want to remove the calendar{" "}
          <b>
            <i>{name}</i>
          </b>{" "}
          from your list?
        </div>
      ),
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
              />
            </ListGroup.Item>
          ))}
        </ListGroup>

        <CustomModal
          show={this.state.show}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          message={this.state.message}
          submitButtonText={"Yes"}
          cancelButtonText={"No"}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { deleteCalendar })(CalendarsCardsGrid);
