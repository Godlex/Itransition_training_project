namespace Quality_of_Life_changer.Contracts.Queries;

using MediatR;
using Model.UserProfile;

public record GetUserCalendarsQuery(string Id) : IRequest<GetUserCalendarsResponse>;

public record GetUserCalendarsResponse(IList<UserCalendar> Calendars);