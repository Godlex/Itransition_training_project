using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Services;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Model.Entities;
using static Google.Apis.Auth.OAuth2.GoogleClientSecrets;

namespace Quality_of_Life_changer.Adapter;

public class CalendarAdapter : ICalendarAdapter
{
    private static readonly string ApplicationName = "Quality of Life changer";

    // If modifying these scopes, delete your previously saved credentials
    // at ~/.credentials/calendar-dotnet-quickstart.json
    private static readonly string[] CalendarScopes = {CalendarService.Scope.Calendar};

    //private static readonly string[] GmailScopes = {GmailService.Scope.GmailReadonly};
    private CalendarService _calendarService;
    // private GmailService _gmailService;

    public async Task<IEnumerable<CalendarEvent>> GetTodayEvents()
    {
        var todayEvents = new List<CalendarEvent>();

        UserCredential credential;

        var fileName = Directory.GetFiles(@".", "client_secret*").First();

        await using (var stream =
                     new FileStream(
                         fileName,
                         FileMode.Open, FileAccess.Read))
        {
            var secret = Load(stream).Secrets;
            credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                secret,
                CalendarScopes,
                "user", CancellationToken.None);
        }


        // Create the service.

        _calendarService = new CalendarService(new BaseClientService.Initializer
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName
        });

        var calendars = await _calendarService.CalendarList.List().ExecuteAsync();
        foreach (var calendar in calendars.Items)
        {
            var request = _calendarService.Events.List(calendar.Id);

            var time = DateTime.Now;
            request.TimeMin = time;
            request.TimeMax = time.AddDays(1);
            request.ShowDeleted = false;
            request.SingleEvents = true;
            request.MaxResults = 255;
            request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

            // List events.
            var events = await request.ExecuteAsync();

            if (events.Items != null && events.Items.Count > 0)
                foreach (var eventItem in events.Items)
                    if (eventItem.Start.DateTime != null && eventItem.End.DateTime != null)
                    {
                        var startTime = (DateTime) eventItem.Start.DateTime;
                        var endTime = (DateTime) eventItem.End.DateTime;

                        todayEvents.Add(new CalendarEvent
                            {StartDateTime = startTime, EndDataTime = endTime, Id = new Guid().ToString()});
                    }
        }

        return todayEvents;
    }
}