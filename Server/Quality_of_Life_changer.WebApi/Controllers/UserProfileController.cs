namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Model.UserProfile;
using System.Text;
using ValidationException = Contracts.Exceptions.ValidationException;

[Route("api/user/{userId}/profile")]
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

    [HttpPost("calendars")]
    public async Task<IActionResult> TodayEvents([FromBody] CalendarModel model, string userId)
    {
        var result = await _calendarModelValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            var stringBuilder = new StringBuilder();
            foreach (var error in result.Errors)
            {
                stringBuilder.Append(error.ErrorMessage);
            }

            throw new ValidationException(stringBuilder.ToString());
        }

        var response = await _mediator.Send(new AddUserCalendarCommand(model.Url, userId, model.Name));
        return Ok(response);
    }
}