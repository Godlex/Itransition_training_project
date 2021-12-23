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
        var request = _calendarService.Events.List("6c73fcbpqb4la5891j62c6l7ndk5na8s@import.calendar.google.com");
        request.TimeMin = DateTime.Now.AddYears(-1);
        request.ShowDeleted = false;
        request.SingleEvents = true;
        request.MaxResults = 10;
        request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

        // List events.
        var events = request.Execute();
        if (events.Items != null && events.Items.Count > 0)
            foreach (var eventItem in events.Items)
            {
                var when = eventItem.Start.DateTime.ToString();
                if (string.IsNullOrEmpty(when)) when = eventItem.Start.Date;

                Console.WriteLine("{0} ({1})", eventItem.Summary, when);
            }
        else
            Console.WriteLine("No upcoming events found.");

        return null;
    }
}