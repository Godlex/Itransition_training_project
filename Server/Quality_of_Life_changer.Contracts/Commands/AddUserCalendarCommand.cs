namespace Quality_of_Life_changer.Contracts.Commands;

using MediatR;

public record AddUserCalendarCommand(
    string Url,
    string OwnerId,
    string? CalendarName
) : IRequest<AddUserCalendarResponse>;

public record AddUserCalendarResponse(string Id, string? CalendarName, string Owner, string Url);