namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using Contracts.Exceptions;
using Contracts.Queries;
using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model.UserProfile;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using ValidationException = FluentValidation.ValidationException;

[Route("api/user/{userId}/profile")]
[ApiController]
public class UserProfileController : ControllerBase
{
    private readonly IValidator<UserCalendar> _calendarModelValidator;
    private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler;
    private readonly IMediator _mediator;

    public UserProfileController(IMediator mediator, IValidator<UserCalendar> calendarModelValidator,
        JwtSecurityTokenHandler jwtSecurityTokenHandler
    )
    {
        _mediator = mediator;
        _calendarModelValidator = calendarModelValidator;
        _jwtSecurityTokenHandler = jwtSecurityTokenHandler;
    }

    [HttpPost("calendars")]
    [Authorize]
    public async Task<IActionResult> AddCalendar([FromBody] UserCalendar model, string userId)
    {
        if (!IsValidId(userId, HttpContext, _jwtSecurityTokenHandler))
        {
            throw new ForbiddenException("User id from url not equals id from token");
        }

        var result = await _calendarModelValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new ValidationException(GetErrors(result));
        }

        var response = await _mediator.Send(new AddUserCalendarCommand(model.Url, userId, model.Name));
        return Ok(response);
    }

    [HttpGet("calendars")]
    [Authorize]
    public async Task<IActionResult> GetCalendars(string userId)
    {
        if (!IsValidId(userId, HttpContext, _jwtSecurityTokenHandler))
        {
            throw new ForbiddenException("User id from url not equals id from token");
        }

        var response = await _mediator.Send(new GetUserCalendarsQuery(userId));

        return Ok(response);
    }

    private static bool IsValidId(string idFromUrl, HttpContext httpContext, JwtSecurityTokenHandler handler)
    {
        var token = GetTokenFromAuthorizationHeader(httpContext);
        var idFromToken = handler.ReadJwtToken(token).Payload["nameid"];

        return idFromToken == idFromUrl;
    }

    private static string GetTokenFromAuthorizationHeader(HttpContext httpContext)
    {
        const string authorizationHeaderType = "Bearer ";
        var lengthAuthorizationHeaderType = authorizationHeaderType.Length;
        var token = httpContext.Request.Headers.Authorization.ToString()[lengthAuthorizationHeaderType..];
        return token;
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