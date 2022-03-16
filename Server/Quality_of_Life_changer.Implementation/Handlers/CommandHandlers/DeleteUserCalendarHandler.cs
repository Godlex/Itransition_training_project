namespace Quality_of_Life_changer.Implementation.Handlers.CommandHandlers;

using Contracts.Commands;
using Contracts.Exceptions;
using Data;
using MediatR;

public class DeleteUserCalendarHandler : BaseCommandHandler,
    IRequestHandler<DeleteUserCalendarCommand>
{
    private readonly QolcDbContext _context;

    public DeleteUserCalendarHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(DeleteUserCalendarCommand request,
        CancellationToken cancellationToken)
    {
        var calendar = _context.Set<Calendar>().FirstOrDefault(x => x.Id == request.CalendarId);

        if (calendar == null)
        {
            throw new BadRequestException("This calendar didn't exist");
        }

        if (calendar.OwnerId != request.UserId)
        {
            throw new ForbiddenException("You are trying to delete not your calendar");
        }

        _context.Remove(calendar);

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}