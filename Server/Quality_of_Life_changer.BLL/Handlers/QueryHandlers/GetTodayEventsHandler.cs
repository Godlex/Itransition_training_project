namespace Quality_of_Life_changer.Implication.Handlers.QueriesHandlers;

using Contracts.Interfaces;
using Contracts.Queries;
using MediatR;

public class GetTodayEventsHandler : BaseQueryHandler,
    IRequestHandler<GetTodayEventsQuery, GetTodayEventsResponse>
{
    private readonly ICalendarAdapter _calendarAdapter;

    public GetTodayEventsHandler(ICalendarAdapter calendarAdapter)
    {
        _calendarAdapter = calendarAdapter;
    }

    public async Task<GetTodayEventsResponse> Handle(GetTodayEventsQuery request,
        CancellationToken cancellationToken)
    {
        var events = await _calendarAdapter.GetTodayEvents();
        return new GetTodayEventsResponse(events.ToList());
    }
}