import React from "react";
import EventsCardsGrid from "./EventsCardsGrid";

function TodayEventsForm() {
  let fetchresult = [];
  return (
    <div style={{ marginTop: "1%", marginLeft: "5%", marginRight: "5%" }}>
      <EventsCardsGrid events={[{name:"EventName",owner:"Owner",startTime:"13-00",endTime:"13-30"},{name:"EventName",owner:"Owner",startTime:"13-00",endTime:"13-30"}]} />
    </div>
  );
}
export default TodayEventsForm;
