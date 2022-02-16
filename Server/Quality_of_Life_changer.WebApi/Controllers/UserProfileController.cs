namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using Contracts.Queries;
using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Model.UserProfile;
using System.Text;

[Route("api/user/{userId}/profile")]
[ApiController]
public class UserProfileController : ControllerBase
{
    private readonly IValidator<UserCalendar> _calendarModelValidator;
    private readonly IMediator _mediator;

    public UserProfileController(IMediator mediator, IValidator<UserCalendar> calendarModelValidator)
    {
        _mediator = mediator;
        _calendarModelValidator = calendarModelValidator;
    }

    [HttpPost("calendars")]
    //[Authorize]
    public async Task<IActionResult> AddCalendar([FromBody] UserCalendar model, string userId)
    {
        var result = await _calendarModelValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new ValidationException(GetErrors(result));
        }

        var response = await _mediator.Send(new AddUserCalendarCommand(model.Url, userId, model.Name));
        return Ok(response);
    }

    [HttpGet("calendars")]
    //[Authorize]
    public async Task<IActionResult> GetCalendars(string userId)
    {
        var response = await _mediator.Send(new GetUserCalendarsQuery(userId));
        return Ok(response);
    }

    private static string GetErrors(ValidationResult result)
    {
        var errors = new StringBuilder();

        foreach (var error in result.Errors)
        {
            errors.Append(error.ErrorMessage);
        }

        return errors.ToString();
    }
}