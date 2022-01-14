namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Interfaces;
using Contracts.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CalendarController : ControllerBase
{
    private readonly IMediator _mediator;

    public CalendarController(ICalendarAdapter calendarAdapter, IMediator mediator)
    {
        _mediator = mediator;
    }

    [Route("events/today")]
    [HttpGet]
    public async Task<IActionResult> GetTodayEvents()
    {
        var response = await _mediator.Send(new GetTodayEventsQuery());
        return response == null ? NotFound() : Ok(response);
    }
}