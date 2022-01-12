namespace Quality_of_Life_changer.Contracts.Queries;

using MediatR;
using Model.Entities;

public class GetTodayEvents
{
    public record Query : IRequest<Response>;

    public record Response(IReadOnlyCollection<CalendarEvent> Events);
}