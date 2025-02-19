﻿namespace Quality_of_Life_changer.WebApi.Controllers;

using Contracts.Commands;
using Contracts.Interfaces;
using Contracts.Queries;
using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model.Auth;
using System.Text;
using ValidationException = Contracts.Exceptions.ValidationException;

[Route("api/auth")]
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
            throw new ValidationException(GetErrors(result));
        }

        var user = await _mediator.Send(new GetUserByEmailQuery(model.Email));

        var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

        if (!passwordValid)
        {
            throw new ValidationException("invalid password");
        }

        return _authService.GetAuthData(user.UserId, user.Username, user.Email);
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthData>> Post([FromBody] RegisterModel model)
    {
        var result = await _registerValidator.ValidateAsync(model);

        if (!result.IsValid)
        {
            throw new ValidationException(GetErrors(result));
        }

        var userId = await _mediator.Send(new AddUserCommand(model.Username, model.Email, model.Password));

        return _authService.GetAuthData(userId, model.Username, model.Email);
    }

    [HttpGet("users/all")]
    [Authorize]
    public async Task<IActionResult> GetAllUsers()
    {
        var response = await _mediator.Send(new GetAllUsersQuery());
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