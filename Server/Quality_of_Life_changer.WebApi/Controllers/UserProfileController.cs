namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Model;

[Route("api/[controller]")]
[ApiController]
public class UserProfileController : ControllerBase
{
    private readonly IValidator<CalendarModel> _calendarModelValidator;
    private readonly IMediator _mediator;

    public UserProfileController(IMediator mediator, IValidator<CalendarModel> calendarModelValidator)
    {
        _mediator = mediator;
        _calendarModelValidator = calendarModelValidator;
    }

    [Route("user/{userId}/profile/calendars")]
    [HttpGet]
    public async Task<IActionResult> GetTodayEvents(string url, string? name, string userId)
    {
        var model = new CalendarModel {Name = name, Url = url};
        var result = await _calendarModelValidator.ValidateAsync(model);
        if (!result.IsValid)
        {
            throw new Exception("invalid input");
        }

        var response = await _mediator.Send(new AddUserCalendarCommand(url, userId, name));
        return Ok(response);
    }
}