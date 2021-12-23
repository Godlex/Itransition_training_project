using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Services;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Model.Entities;

namespace Quality_of_Life_changer.Adapter;

public class CalendarAdapter : ICalendarAdapter
{
    private static readonly string ApplicationName = "Quality of Life changer";

    // If modifying these scopes, delete your previously saved credentials
    // at ~/.credentials/calendar-dotnet-quickstart.json
    private static readonly string[] Scopes = {CalendarService.Scope.CalendarReadonly};
    private readonly CalendarService _calendarService;

    public CalendarAdapter()
    {
        //UserCredential credential;
        var credential =
            GoogleCredential.FromStream(new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
                .CreateScoped(Scopes);

        // Create Google Calendar API service.
        _calendarService = new CalendarService(new BaseClientService.Initializer
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName
        });
    }

    public IEnumerable<CalendarEvent> GetTodayEvents()
    {
        // Define parameters of request.
        var calendars = _calendarService.CalendarList.List().Execute();
        foreach (var calendar in calendars.Items)
        {
            var request = _calendarService.Events.List(calendar.Id);
            var time = DateTime.Now.AddHours(-255);
            request.TimeMin = time;
            request.TimeMax = time.AddHours(255);
            request.ShowDeleted = false;
            request.SingleEvents = true;
            request.MaxResults = 255;
            request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

            // List events.
            var events = request.Execute();

            if (events.Items != null && events.Items.Count > 0)
                foreach (var eventItem in events.Items)
                {
                    var startTime = eventItem.Start.DateTime.ToString();
                    var endTime = eventItem.End.DateTime.ToString();
                    var timeZone = eventItem.Start.TimeZone;
                    var time0 = DateTime.Parse(eventItem.Start.DateTimeRaw);


                    if (string.IsNullOrEmpty(startTime)) startTime = eventItem.Start.Date;

                    Console.WriteLine("{0} ({1})-({2})", eventItem.Summary, startTime, time0.ToString());
                }
            else
                Console.WriteLine("No upcoming events found.");
        }

        return null;
    }
}