namespace Quality_of_Life_changer.Implementation.Handlers.CommandHandlers;

using Contracts.Commands;
using Contracts.Exceptions;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class AddUserCalendarCommandHandler : BaseCommandHandler,
    IRequestHandler<AddUserCalendarCommand>
{
    private readonly QolcDbContext _context;

    public AddUserCalendarCommandHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(AddUserCalendarCommand request,
        CancellationToken cancellationToken)
    {
        var calendarId = Guid.NewGuid().ToString();

        var calendarName = await GetCalendarName(request, cancellationToken);

        _context.Set<Calendar>().Add(new Calendar
        {
            CalendarName = calendarName,
            Id = calendarId,
            OwnerId = request.OwnerId,
            Url = request.Url,
            Created = DateTime.Now
        });

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }

    private async Task<string> GetCalendarName(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        if (request.CalendarName != null)
        {
            return request.CalendarName;
        }

        var userName = await GetUserName(request, cancellationToken);

        await CheckCalendarExist(request, cancellationToken);

        return userName;
    }

    private async Task CheckCalendarExist(AddUserCalendarCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _context.Set<User>()
            .FirstAsync(x => x.Id == request.OwnerId, cancellationToken);

        if (user.Calendars.Count != 0)
        {
            throw new ValidationException("Enter a calendar's name");
        }
    }

    private async Task<string> GetUserName(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        return await Task.FromResult(_context.Set<User>()
            .FirstAsync(x => x.Id == request.OwnerId, cancellationToken).Result.UserName.ToString());
    }
}