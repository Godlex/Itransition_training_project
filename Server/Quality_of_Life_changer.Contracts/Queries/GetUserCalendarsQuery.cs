namespace Quality_of_Life_changer.Contracts.Queries;

using MediatR;
using Model.UserProfile;

public record GetUserCalendarsQuery(string UserId) : IRequest<GetUserCalendarsResponse>;

public record GetUserCalendarsResponse(IList<UserCalendar> Calendars);