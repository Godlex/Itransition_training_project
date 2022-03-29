import AddUserCalendarToggle from "./add-user-calendar-toggle";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "AddUserCalendarToggle",
  component: AddUserCalendarToggle,
};

const Template = () => <AddUserCalendarToggle />;

export const Default = Template.bind({});
