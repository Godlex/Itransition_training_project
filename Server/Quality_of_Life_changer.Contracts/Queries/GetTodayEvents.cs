using MediatR;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Model.Entities;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetTodayEvents
{
    public record Query : IRequest<Response>;

    //Handler
    //business logic
    public class Handler : IRequestHandler<Query, Response>
    {
        private readonly ICalendarAdapter _calendarAdapter;

        public Handler(ICalendarAdapter calendarAdapter)
        {
            _calendarAdapter = calendarAdapter;
        }

        public async Task<Response> Handle(Query request, CancellationToken cancellationToken)
        {
            var Events = await _calendarAdapter.GetTodayEvents();
            return new Response(Events.ToList());
        }
    }

    //Response
    public record Response(IReadOnlyCollection<CalendarEvent> Events);
}