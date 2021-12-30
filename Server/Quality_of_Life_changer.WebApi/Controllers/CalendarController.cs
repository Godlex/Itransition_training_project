using MediatR;
using Microsoft.AspNetCore.Mvc;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Contracts.Queries;

namespace Quality_of_Life_changer.WebApi.Controllers;

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
        var response = await _mediator.Send(new GetTodayEvents.Query());
        return response == null ? NotFound() : Ok(response);
    }
}