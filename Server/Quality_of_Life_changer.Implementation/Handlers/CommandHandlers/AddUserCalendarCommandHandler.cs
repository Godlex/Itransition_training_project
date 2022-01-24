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
        if (await IsCalendarAlreadyExistWithUrl(request.Url, cancellationToken))
        {
            throw new ValidationException("Calendar with this url already exist");
        }

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

    private async Task<bool> IsCalendarAlreadyExistWithUrl(string url, CancellationToken cancellationToken)
    {
        return await _context.Set<Calendar>()
            .FirstOrDefaultAsync(c => c.Url == url, cancellationToken) != null;
    }

    private async Task<User?> GetCalendarOwner(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        var user = await _context.Set<User>().Include(u => u.Calendars)
            .FirstOrDefaultAsync(x => x.Id == request.OwnerId, cancellationToken);

        if (user == null)
        {
            throw new ValidationException("No user with this id");
        }

        return user;
    }

    private async Task<string> GetCalendarName(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        if (!string.IsNullOrEmpty(request.CalendarName))
        {
            return request.CalendarName;
        }

        await CheckCalendarExist(request, cancellationToken);

        return await GetUserName(request, cancellationToken);
    }

    private async Task CheckCalendarExist(AddUserCalendarCommand request,
        CancellationToken cancellationToken)
    {
        var user = await GetCalendarOwner(request, cancellationToken);

        if (user.Calendars != null && user.Calendars.Count > 0)
        {
            throw new ValidationException("Enter a calendar's name");
        }
    }

    private async Task<string> GetUserName(AddUserCalendarCommand request, CancellationToken cancellationToken)
    {
        return await Task.FromResult(_context.Set<User>()
            .FirstAsync(x => x.Id == request.OwnerId, cancellationToken).Result.UserName);
    }
}