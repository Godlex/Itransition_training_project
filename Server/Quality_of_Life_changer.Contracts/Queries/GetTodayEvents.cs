using MediatR;
using Quality_of_Life_changer.Model.Entities;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetTodayEvents
{
    public record Query : IRequest<Response>;

    public record Response(IReadOnlyCollection<CalendarEvent> Events);
}