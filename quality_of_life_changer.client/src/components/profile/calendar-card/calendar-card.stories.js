import CalendarCard from "./calendar-card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CalendarCard",
  component: CalendarCard,
};

const Template = (args) => <CalendarCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Calendar name - 1",
  url: "url-1",
};
