namespace Quality_of_Life_changer.Implementation.Handlers.QueryHandlers;

using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Model.UserProfile;

public class GetUserCalendarsQueryHandler : BaseQueryHandler,
    IRequestHandler<GetUserCalendarsQuery, GetUserCalendarsResponse>
{
    private readonly QolcDbContext _context;

    public GetUserCalendarsQueryHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetUserCalendarsResponse> Handle(GetUserCalendarsQuery request,
        CancellationToken cancellationToken)
    {
        var userCalendars =
            await _context.Set<Calendar>().Include(x => x.Owner).Where(x => x.OwnerId == request.UserId)
                .ToListAsync(cancellationToken);
        return new GetUserCalendarsResponse(MapCalendarToUserCalendar(userCalendars));
    }

    private static IList<UserCalendar> MapCalendarToUserCalendar(IEnumerable<Calendar> calendars)
    {
        return calendars.Select(calendar => new UserCalendar
                {Id = calendar.Id, Name = calendar.CalendarName, Url = calendar.Url})
            .ToList();
    }
}