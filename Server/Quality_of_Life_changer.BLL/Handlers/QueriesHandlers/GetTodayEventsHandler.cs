namespace Quality_of_Life_changer.Implication.Handlers.QueriesHandlers;

using Contracts.Interfaces;
using Contracts.Queries;
using MediatR;

public class GetTodayEventsHandler : BaseQueriesHandler, IRequestHandler<GetTodayEvents.Query, GetTodayEvents.Response>
{
    private readonly ICalendarAdapter _calendarAdapter;

    public GetTodayEventsHandler(ICalendarAdapter calendarAdapter)
    {
        _calendarAdapter = calendarAdapter;
    }

    public async Task<GetTodayEvents.Response> Handle(GetTodayEvents.Query request,
        CancellationToken cancellationToken)
    {
        var events = await _calendarAdapter.GetTodayEvents();
        return new GetTodayEvents.Response(events.ToList());
    }
}