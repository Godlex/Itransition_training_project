using MediatR;
using Microsoft.AspNetCore.Mvc;
using Qoality_of_Life_changer.Model.Auth;
using Quality_of_Life_changer.Contracts.Commands;
using Quality_of_Life_changer.Contracts.Interfaces;
using Quality_of_Life_changer.Contracts.Queries;
using Quality_of_Life_changer.WebApi.Validators;

namespace Quality_of_Life_changer.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IMediator _mediator;

    public AuthController(IAuthService authService, IMediator mediator)
    {
        _authService = authService;
        _mediator = mediator;
    }

    [Consumes("application/json")]
    [HttpPost("login")]
    public async Task<ActionResult<AuthData>> Post([FromBody] LoginModel model) //todo viewmodel to model
    {
        var validator = new LoginModelValidator(); //todo validator to DI

        var result = await validator.ValidateAsync(model);

        if (!result.IsValid) return StatusCode(422, result.Errors);

        var user = await _mediator.Send(new GetUserByEmail.Query(model.Email));

        if (user == null) return BadRequest(new {email = "no user with this email"}); //todo

        var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

        if (!passwordValid) return BadRequest(new {password = "invalid password"}); //todo

        return _authService.GetAuthData(user.Id, user.Username, user.Email);
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthData>> Post([FromBody] RegisterModel model)
    {
        var validator = new RegisterModelValidator();
        var result = await validator.ValidateAsync(model);

        if (!result.IsValid) return BadRequest(result.Errors);

        var command = new AddUser.Command(model.Username, model.Email, model.Password);
        var user = await _mediator.Send(command);

        return _authService.GetAuthData(user.Id, user.UserName, user.Email);
    }

    [HttpGet]
    // [Authorize]
    public async Task<IActionResult> GetAllUsers()
    {
        var response = await _mediator.Send(new GetAllUsers.Query());
        return response == null ? NotFound() : Ok(response);
    }
}