import React, { Component } from "react";
import EventsCardsGrid from "./events-cards-grid/events-cards-grid";
import moment from "moment";

export default class TodayEventFrom extends Component {
  render() {
    return (
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
    );
  }
}
