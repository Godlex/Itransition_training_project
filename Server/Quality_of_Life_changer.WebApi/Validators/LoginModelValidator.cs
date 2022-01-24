namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.Auth;

public class LoginModelValidator : AbstractValidator<LoginModel>
{
    public LoginModelValidator()
    {
        RuleFor(loginModel => loginModel.Email).NotEmpty().EmailAddress();
        RuleFor(loginModel => loginModel.Password).NotEmpty();
    }
}