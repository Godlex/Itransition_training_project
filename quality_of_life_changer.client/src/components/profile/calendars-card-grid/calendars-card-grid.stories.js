import CalendarsCardsGrid from "./calendars-card-grid";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CalendarsCardsGrid",
  component: CalendarsCardsGrid,
};

const Template = (args) => <CalendarsCardsGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = { calendars: [{ name: "name-1", url: "url-1" }] };
