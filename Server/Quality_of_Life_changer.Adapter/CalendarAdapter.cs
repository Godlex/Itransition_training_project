using static Google.Apis.Auth.OAuth2.GoogleClientSecrets;

namespace Quality_of_Life_changer.Adapter;

using Contracts.Interfaces;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Model;

public class CalendarAdapter : ICalendarAdapter
{
    private const string ApplicationName = "Quality of Life changer";

    private static readonly string[] CalendarScopes = {CalendarService.Scope.Calendar};

    private CalendarService _calendarService;

    private ClientSecrets _secrets;

    public CalendarAdapter()
    {
        var fileName = GetFileName();

        SetupSecrets(fileName);

        SetupCalendarAsync().Wait();
    }

    public async Task<IEnumerable<CalendarEvent>> GetTodayEvents()
    {
        var todayEvents = new List<CalendarEvent>();

        var calendars = await GetCalendarListAsync();

        foreach (var calendar in calendars.Items)
        {
            var eventsRequest = CreateEventsRequest(calendar);

            var events = await eventsRequest.ExecuteAsync();

            todayEvents.AddRange(MapEventsToCalendarEvents(events));
        }

        return todayEvents;
    }

    private EventsResource.ListRequest CreateEventsRequest(CalendarListEntry calendar)
    {
        var sortOrder = EventsResource.ListRequest.OrderByEnum.StartTime;
        var maxNumberOfEvents = 255;

        var minStartTime = DateTime.Now;
        var maxStartTime = DateTime.Now.AddDays(1);


        var eventsRequest = _calendarService.Events.List(calendar.Id);

        eventsRequest.TimeMin = minStartTime;
        eventsRequest.TimeMax = maxStartTime;
        eventsRequest.ShowDeleted = false;
        eventsRequest.SingleEvents = true;
        eventsRequest.MaxResults = maxNumberOfEvents;
        eventsRequest.OrderBy = sortOrder;

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

    private async Task SetupCalendarAsync()
    {
        var credential = await CreateCredentialAsync();

        CreateCalendarService(credential);
    }

    private async Task<UserCredential> CreateCredentialAsync()
    {
        return await GoogleWebAuthorizationBroker.AuthorizeAsync(
            _secrets,
            CalendarScopes,
            "user", CancellationToken.None);
    }

    private async Task<CalendarList> GetCalendarListAsync()
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

    private IEnumerable<CalendarEvent> MapEventsToCalendarEvents(Events events)
    {
        return events.Items
            .Where(x => x.Start.DateTime.HasValue && x.End.DateTime.HasValue)
            .Select(x => new CalendarEvent
            {
                StartDateTime = (DateTime) x.Start.DateTime,
                EndDateTime = (DateTime) x.End.DateTime,
                Id = x.Id,
                Name = x.Summary,
                Owner = x.Creator.DisplayName
            });
    }
}