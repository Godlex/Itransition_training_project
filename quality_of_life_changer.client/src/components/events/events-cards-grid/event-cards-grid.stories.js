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

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      name: "Event Name",
      owner: "Owner",
      startTime: "2021-05-22T11:31:38Z",
      endTime: "2022-02-05T18:10:11Z",
    },
  ],
};

export const MultipleEvents = Template.bind({});
MultipleEvents.args = {
  events: [
    {
      name: "Lotlux",
      owner: "Trula",
      startTime: "2021-05-22T11:31:38Z",
      endTime: "2022-02-05T18:10:11Z",
    },
    {
      name: "Sonair",
      owner: "Lolita",
      startTime: "2021-09-15T22:55:52Z",
      endTime: "2021-04-22T09:10:15Z",
    },
    {
      name: "Span",
      owner: "Pascal",
      startTime: "2021-05-24T04:41:22Z",
      endTime: "2021-06-03T07:09:46Z",
    },
    {
      name: "Matsoft",
      owner: "Cal",
      startTime: "2021-09-20T03:13:40Z",
      endTime: "2021-04-16T00:13:17Z",
    },
    {
      name: "Sonair",
      owner: "Tandi",
      startTime: "2021-11-25T20:37:29Z",
      endTime: "2021-08-29T06:32:54Z",
    },
    {
      name: "Flexidy",
      owner: "Clayton",
      startTime: "2021-05-18T07:39:27Z",
      endTime: "2021-03-17T05:02:38Z",
    },
    {
      name: "Aerified",
      owner: "Arv",
      startTime: "2022-02-16T01:07:55Z",
      endTime: "2021-04-13T15:18:11Z",
    },
    {
      name: "Trippledex",
      owner: "Livy",
      startTime: "2021-09-19T08:36:47Z",
      endTime: "2022-01-29T17:09:52Z",
    },
    {
      name: "Job",
      owner: "Orazio",
      startTime: "2021-06-20T21:21:09Z",
      endTime: "2021-09-01T07:23:46Z",
    },
    {
      name: "Voltsillam",
      owner: "Suzy",
      startTime: "2021-05-07T12:04:28Z",
      endTime: "2021-08-28T13:07:54Z",
    },
  ],
};
