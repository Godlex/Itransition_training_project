namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.Auth;

public class LoginModelValidator : AbstractValidator<LoginModel>
{
    public LoginModelValidator()
    {
        RuleFor(loginModel => loginModel.Email).NotEmpty().EmailAddress()
            .WithMessage("Email is required and cannot be empty");
        RuleFor(loginModel => loginModel.Password).NotEmpty().WithMessage("Password is required and cannot be empty");
    }
}