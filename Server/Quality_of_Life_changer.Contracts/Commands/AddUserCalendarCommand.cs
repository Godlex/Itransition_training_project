namespace Quality_of_Life_changer.Contracts.Commands;

using MediatR;

public record AddUserCalendarCommand(
    string Url,
    string OwnerId,
    string? CalendarName
) : IRequest;