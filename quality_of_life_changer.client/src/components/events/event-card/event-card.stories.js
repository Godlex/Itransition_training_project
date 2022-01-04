import moment from "moment";
import React from "react";
import "./event-card.css";

import EventCard from "./event-card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "EventCard",
  component: EventCard,
};

const Template = (args) => <EventCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "EventName1",
  owner: "Owner1",
  startTime: moment("2022-01-03T10:30:00+03:00"),
  endTime: moment("2022-01-03T11:00:00+03:00"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "SecondaryName",
  owner: "SecondaryOwner",
  startTime: moment("2022-01-03T10:30:00+03:00"),
  endTime: moment("2022-01-03T11:00:00+03:00"),
};