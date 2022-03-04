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
Default.args = {
  calendars: [
    {
      name: "name-1",
      url: "https://outlook.office365.com/owa/calendar/example-1.ics",
    },
  ],
};

export const MultipleCalendars = Template.bind({});
MultipleCalendars.args = {
  calendars: [
    {
      name: "name-1",
      url: "https://outlook.office365.com/owa/calendar/example-1.ics",
    },
    {
      name: "name-2",
      url: "https://outlook.office365.com/owa/calendar/example-2.ics",
    },
    {
      name: "name-3",
      url: "https://outlook.office365.com/owa/calendar/example-3.ics",
    },
    {
      name: "name-4",
      url: "https://outlook.office365.com/owa/calendar/example-4.ics",
    },
    {
      name: "name-5",
      url: "https://outlook.office365.com/owa/calendar/example-5.ics",
    },
    {
      name: "name-6",
      url: "https://outlook.office365.com/owa/calendar/example-6.ics",
    },
    {
      name: "name-7",
      url: "https://outlook.office365.com/owa/calendar/example-7.ics",
    },
    {
      name: "name-8",
      url: "https://outlook.office365.com/owa/calendar/example-8.ics",
    },
    {
      name: "name-9",
      url: "https://outlook.office365.com/owa/calendar/example-9.ics",
    },
  ],
};
