import moment from "moment";
import EventsCardsGrid from "./events-cards-grid";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "EventsCardsGrid",
  component: EventsCardsGrid,
};

const Template = (args) => <EventsCardsGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  events: [
    {
      name: "EventName1",
      owner: "Owner1",
      startTime: moment("2022-01-03T10:30:00+03:00"),
      endTime: moment("2022-01-03T11:00:00+03:00"),
    },
    {
      name: "SecondaryName",
      owner: "SecondaryOwner",
      startTime: moment("2022-01-03T10:30:00+03:00"),
      endTime: moment("2022-01-03T11:00:00+03:00"),
    },
  ],
};
