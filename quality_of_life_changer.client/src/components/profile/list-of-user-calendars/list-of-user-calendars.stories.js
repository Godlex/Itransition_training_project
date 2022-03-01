import ListOfUserCalendars from "./list-of-user-calendars";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ListOfUserCalendars",
  component: ListOfUserCalendars,
};

const Template = (args) => <ListOfUserCalendars {...args} />;

export const Primary = Template.bind({});
Primary.args = { calendars:[{name: "name-1", url: "url-1"}] };
