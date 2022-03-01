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

export const Default = Template.bind({});
Default.args = { calendars: [{ name: "name-1", url: "url-1" }] };

export const MultipleCalendars = Template.bind({});
MultipleCalendars.args = {
  calendars: [
    { name: "name-1", url: "url-1" },
    { name: "name-2", url: "url-2" },
    { name: "name-3", url: "url-3" },
    { name: "name-4", url: "url-4" },
    { name: "name-5", url: "url-5" },
    { name: "name-6", url: "url-6" },
    { name: "name-7", url: "url-7" },
    { name: "name-8", url: "url-8" },
    { name: "name-9", url: "url-9" },
  ],
};