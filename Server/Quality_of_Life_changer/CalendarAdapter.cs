using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Model.Entities;
using static Google.Apis.Auth.OAuth2.GoogleClientSecrets;

namespace Quality_of_Life_changer.Adapter;

public class CalendarAdapter : ICalendarAdapter
{
    private static readonly string ApplicationName = "Quality of Life changer";

    private static readonly string[] CalendarScopes = {CalendarService.Scope.Calendar};

    private CalendarService _calendarService;

    private ClientSecrets _secrets;

    public CalendarAdapter()
    {
        var fileName = GetFileName();

        SetupSecrets(fileName);

        SetupCalendar().Wait();
    }

    public async Task<IEnumerable<CalendarEvent>> GetTodayEvents()
    {
        var todayEvents = new List<CalendarEvent>();

        var calendars = await GetCalendarList();

        foreach (var calendar in calendars.Items)
        {
            var eventsRequest = CreateRequest(calendar);

            var events = await eventsRequest.ExecuteAsync();

            AddEventsFromRequestTo(todayEvents, events);
        }

        return todayEvents;
    }

    private EventsResource.ListRequest CreateRequest(CalendarListEntry calendar)
    {
        var sortByStartTime = EventsResource.ListRequest.OrderByEnum.StartTime;
        var maxEvents = 255;
        var minStartTime = DateTime.Now;
        var maxStartTime = DateTime.Now.AddDays(1);


        var eventsRequest = _calendarService.Events.List(calendar.Id);

        eventsRequest.TimeMin = minStartTime;
        eventsRequest.TimeMax = maxStartTime;
        eventsRequest.ShowDeleted = false;
        eventsRequest.SingleEvents = true;
        eventsRequest.MaxResults = maxEvents;
        eventsRequest.OrderBy = sortByStartTime;
        return eventsRequest;
    }

    private void SetupSecrets(string fileName)
    {
        using var stream = new FileStream(fileName, FileMode.Open, FileAccess.Read);
        _secrets = Load(stream).Secrets;
    }

    private static string GetFileName()
    {
        return Directory.GetFiles(@".", "client_secret*").First();
    }

    private async Task SetupCalendar()
    {
        var credential = await CreateCredential();

        CreateCalendarService(credential);
    }

    private async Task<UserCredential> CreateCredential()
    {
        return await GoogleWebAuthorizationBroker.AuthorizeAsync(
            _secrets,
            CalendarScopes,
            "user", CancellationToken.None);
    }

    private async Task<CalendarList> GetCalendarList()
    {
        return await _calendarService.CalendarList.List().ExecuteAsync();
    }

    private void CreateCalendarService(UserCredential credential)
    {
        _calendarService = new CalendarService(new BaseClientService.Initializer
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName
        });
    }

    private static void AddEventsFromRequestTo(List<CalendarEvent> todayEvents, Events events)
    {
        if (events.Items is {Count: > 0})
            todayEvents.AddRange(events.Items
                .Where(x => x.Start.DateTime.HasValue && x.End.DateTime.HasValue)
                .Select(x => new CalendarEvent
                {
                    StartDateTime = (DateTime) x.Start.DateTime, EndDateTime = (DateTime) x.End.DateTime,
                    Id = Guid.NewGuid().ToString()
                }));
    }
}