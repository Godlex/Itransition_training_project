namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using Contracts.Interfaces;
using Contracts.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Model.Auth;
using Validators;

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
    public async Task<ActionResult<AuthData>> Post([FromBody] LoginModel model)
    {
        var validator = new LoginModelValidator(); //todo validator to DI

        var result = await validator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new Exception("invalid input");
        }

        var user = await _mediator.Send(new GetUserByEmail.Query(model.Email));

        var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

        if (!passwordValid)
        {
            throw new Exception("invalid password");
        }

        return _authService.GetAuthData(user.Id, user.Username, user.Email);
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthData>> Post([FromBody] RegisterModel model)
    {
        var validator = new RegisterModelValidator();
        var result = await validator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new Exception("invalid input");
        }

        await _mediator.Send(new GetUserByEmail.Query(model.Email));

        var command = new AddUser.Command(model.Username, model.Email, model.Password);
        var user = await _mediator.Send(command);

        return _authService.GetAuthData(user.Id, user.UserName, user.Email);
    }

    [HttpGet("users/all")]
    // [Authorize]
    public async Task<IActionResult> GetAllUsers()
    {
        var response = await _mediator.Send(new GetAllUsers.Query());
        return Ok(response);
    }
}