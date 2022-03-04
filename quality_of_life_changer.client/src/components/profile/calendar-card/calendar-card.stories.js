import { CalendarCard } from "./calendar-card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CalendarCard",
  component: CalendarCard,
};

const Template = (args) => <CalendarCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Calendar name",
  url: "https://outlook.office365.com/owa/calendar/example.ics",
};

export const MaxNameLenght = Template.bind({});
MaxNameLenght.args = {
  name: "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong name",
  url: "https://outlook.office365.com/owa/calendar/example.ics",
};
