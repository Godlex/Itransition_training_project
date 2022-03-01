import React from "react";

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

export const Default = Template.bind({});
Default.args = {
  name: "EventName1",
  owner: "Owner1",
  startTime: "2022-01-03T10:30:00+03:00",
  endTime: "2022-01-03T11:00:00+03:00",
};
