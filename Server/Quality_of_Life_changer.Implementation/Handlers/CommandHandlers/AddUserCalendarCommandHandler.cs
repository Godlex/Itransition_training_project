namespace Quality_of_Life_changer.Implementation.Handlers.CommandHandlers;

using Contracts.Commands;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class AddUserCalendarCommandHandler : BaseCommandHandler,
    IRequestHandler<AddUserCalendarCommand, AddUserCalendarResponse>
{
    private readonly QolcDbContext _context;

    public AddUserCalendarCommandHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<AddUserCalendarResponse> Handle(AddUserCalendarCommand request,
        CancellationToken cancellationToken)
    {
        var calendarId = Guid.NewGuid().ToString();

        string calendarName;

        if (request.CalendarName == null)
        {
            var userName = GetUserName(request, cancellationToken).ToString()!;
            var calendarCount = _context.Set<Calendar>().Select(x => x.OwnerId == request.OwnerId).Count();
            if (calendarCount != 0)
            {
                calendarName = userName + "-" + calendarCount;
            }
            else
            {
                calendarName = userName;
            }
        }
        else
        {
            calendarName = request.CalendarName;
        }

        _context.Set<Calendar>().Add(new Calendar
        {
            CalendarName = calendarName,
            Id = calendarId,
            OwnerId = request.OwnerId,
            Url = request.Url,
            Created = DateTime.Now
        });

        await _context.SaveChangesAsync(cancellationToken);

        return new AddUserCalendarResponse(calendarId, calendarName, request.OwnerId, request.Url);
    }

    private Task<User> GetUserName(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        return _context.Set<User>()
            .FirstAsync(x => x.Id == request.OwnerId, cancellationToken);
    }
}