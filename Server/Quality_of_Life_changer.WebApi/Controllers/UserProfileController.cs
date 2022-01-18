namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class UserProfileController : ControllerBase
{
    private readonly IMediator _mediator;

    public UserProfileController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [Route("user/{userId}/profile/calendars")]
    [HttpGet]
    public async Task<IActionResult> GetTodayEvents(string url, string? name, string userId)
    {
        var response = await _mediator.Send(new AddUserCalendarCommand(url, userId, name));
        return Ok(response);
    }
}