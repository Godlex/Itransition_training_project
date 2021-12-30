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

        SetupCalendar();
    }

    public async Task<IEnumerable<CalendarEvent>> GetTodayEvents()
    {
        var todayEvents = new List<CalendarEvent>();

        var calendars = await GetCalendarList();

        foreach (var calendar in calendars.Items)
        {
            var request = CreateRequest(calendar);

            SetRequestOptions(request);

            var events = await GetEvents(request);

            await AddEventsFromRequestTo(todayEvents, events);
        }

        return todayEvents;
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

    private EventsResource.ListRequest CreateRequest(CalendarListEntry calendar)
    {
        return _calendarService.Events.List(calendar.Id);
    }

    private async Task<Events> GetEvents(EventsResource.ListRequest request)
    {
        return await request.ExecuteAsync();
    }

    private static Task AddEventsFromRequestTo(List<CalendarEvent> todayEvents, Events events)
    {
        if (events.Items != null && events.Items.Count > 0)
            foreach (var eventItem in events.Items)
                if (eventItem.Start.DateTime != null && eventItem.End.DateTime != null)
                {
                    var startTime = (DateTime) eventItem.Start.DateTime;
                    var endTime = (DateTime) eventItem.End.DateTime;

                    todayEvents.Add(new CalendarEvent
                        {StartDateTime = startTime, EndDateTime = endTime, Id = new Guid().ToString()});
                }

        return Task.CompletedTask;
    }

    private static void SetRequestOptions(EventsResource.ListRequest request)
    {
        var sortByStartTime = EventsResource.ListRequest.OrderByEnum.StartTime;
        var maxEvents = 255;
        var minStartTime = DateTime.Now;
        var maxStartTime = DateTime.Now.AddDays(1);

        request.TimeMin = minStartTime;
        request.TimeMax = maxStartTime;
        request.ShowDeleted = false;
        request.SingleEvents = true;
        request.MaxResults = maxEvents;
        request.OrderBy = sortByStartTime;
    }
}