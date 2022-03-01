import UserInfo from "./user-info";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UserInfo",
  component: UserInfo,
};

const Template = (args) => <UserInfo {...args} />;

export const Default = Template.bind({});
Default.args = { name: "Name", email: "Email" };
