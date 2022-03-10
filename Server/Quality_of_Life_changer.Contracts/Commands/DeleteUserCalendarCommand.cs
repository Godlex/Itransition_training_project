namespace Quality_of_Life_changer.Contracts.Commands;

using MediatR;

public record DeleteUserCalendarCommand(
    string UserId,
    string CalendarId
) : IRequest;