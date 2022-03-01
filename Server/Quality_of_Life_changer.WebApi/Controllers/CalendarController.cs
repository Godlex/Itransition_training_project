namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[Route("api/calendar")]
[ApiController]
public class CalendarController : ControllerBase
{
    private readonly IMediator _mediator;

    public CalendarController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("events/today")]
    public async Task<IActionResult> GetTodayEvents()
    {
        var response = await _mediator.Send(new GetTodayEventsQuery());
        return Ok(response);
    }
}