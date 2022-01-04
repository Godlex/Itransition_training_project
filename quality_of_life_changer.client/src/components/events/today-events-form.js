import React, { Component } from "react";
import EventsCardsGrid from "./EventsCardsGrid";
import moment from "moment";


export default class App extends Component {
  render() {
    return (
      <div style={{ marginTop: "1%", marginLeft: "5%", marginRight: "5%" }}>
        <EventsCardsGrid
          events={[
            {
              name: "EventName1",
              owner: "Owner1",
              startTime: moment("2022-01-03T10:30:00+03:00"),
              endTime: moment("2022-01-03T11:00:00+03:00"),
            },
            {
              name: "EventName2",
              owner: "Owner2",
              startTime: moment("2022-02-04T10:30:00+03:00"),
              endTime: moment("2022-02-04T11:00:00+03:00"),
            },
          ]}
        />
      </div>
    );
  }
}
