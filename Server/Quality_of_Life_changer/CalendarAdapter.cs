using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Gmail.v1;
using Google.Apis.Services;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Model.Entities;

namespace Quality_of_Life_changer.Adapter;

public class CalendarAdapter : ICalendarAdapter
{
    private static readonly string ApplicationName = "Quality of Life changer";

    // If modifying these scopes, delete your previously saved credentials
    // at ~/.credentials/calendar-dotnet-quickstart.json
    private static readonly string[] CalendarScopes = {CalendarService.Scope.Calendar};
    private static readonly string[] GmailScopes = {GmailService.Scope.GmailReadonly};
    private readonly CalendarService _calendarService;
    private readonly GmailService _gmailService;

    public CalendarAdapter()
    {
        //UserCredential credential;
        var calendarCredential =
            GoogleCredential.FromStream(new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
                .CreateScoped(CalendarScopes)
                .CreateWithUser("qolc-215@quality-of-life-changer.iam.gserviceaccount.com");

        // Create Google Calendar API service.
        _calendarService = new CalendarService(new BaseClientService.Initializer
        {
            HttpClientInitializer = calendarCredential,
            ApplicationName = ApplicationName
        });

        var gmailCredential =
            GoogleCredential.FromStream(new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
                .CreateScoped(GmailScopes).CreateWithUser("qolc-215@quality-of-life-changer.iam.gserviceaccount.com");

        _gmailService = new GmailService(new BaseClientService.Initializer
        {
            HttpClientInitializer = gmailCredential,
            ApplicationName = ApplicationName
        });
    }

    public IEnumerable<CalendarEvent> GetTodayEvents()
    {
        // Define parameters of request.
        //var cal = new CalendarListEntry {Id = "6c73fcbpqb4la5891j62c6l7ndk5na8s@import.calendar.google.com"};
        //  var calendars1 = _calendarService.CalendarList.Insert(cal).Execute();

        //  var listRequest = _gmailService.Users.Messages.List("qualityoflifechanger42");
        //  var response1 = listRequest.Execute();

        var calendars = _calendarService.CalendarList.List().Execute();
        foreach (var calendar in calendars.Items)
        {
            var request = _calendarService.Events.List(calendar.Id);
            var time = DateTime.Now.AddYears(-1);
            request.TimeMin = time;
            request.TimeMax = time.AddYears(1);
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