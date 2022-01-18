namespace Quality_of_Life_changer.Implementation.Handlers.QueryHandlers;

using Contracts.Interfaces;
using Contracts.Queries;
using MediatR;

public class GetTodayEventsQueryHandler : BaseQueryHandler,
    IRequestHandler<GetTodayEventsQuery, GetTodayEventsResponse>
{
    private readonly ICalendarAdapter _calendarAdapter;

    public GetTodayEventsQueryHandler(ICalendarAdapter calendarAdapter)
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