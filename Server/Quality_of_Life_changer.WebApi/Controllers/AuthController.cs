namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using Contracts.Exceptions;
using Contracts.Interfaces;
using Contracts.Queries;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Model.Auth;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IValidator<LoginModel> _loginValidator;
    private readonly IMediator _mediator;
    private readonly IValidator<RegisterModel> _registerValidator;

    public AuthController(IAuthService authService, IMediator mediator, IValidator<LoginModel> loginValidator,
        IValidator<RegisterModel> registerValidator)
    {
        _authService = authService;
        _mediator = mediator;
        _loginValidator = loginValidator;
        _registerValidator = registerValidator;
    }

    [Consumes("application/json")]
    [HttpPost("login")]
    public async Task<ActionResult<AuthData>> Post([FromBody] LoginModel model)
    {
        var result = await _loginValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new InvalidInputException("invalid input");
        }

        var user = await _mediator.Send(new GetUserByEmailQuery(model.Email));

        var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

        if (!passwordValid)
        {
            throw new InvalidInputException("invalid password");
        }

        return _authService.GetAuthData(user.Id, user.Username, user.Email);
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthData>> Post([FromBody] RegisterModel model)
    {
        var result = await _registerValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new InvalidInputException("invalid input");
        }

        var command = new AddUserCommand(model.Username, model.Email, model.Password);
        var user = await _mediator.Send(command);

        return _authService.GetAuthData(user.Id, user.UserName, user.Email);
    }

    [HttpGet("users/all")]
    // [Authorize]
    public async Task<IActionResult> GetAllUsers()
    {
        var response = await _mediator.Send(new GetAllUsersQuery());
        return Ok(response);
    }
}