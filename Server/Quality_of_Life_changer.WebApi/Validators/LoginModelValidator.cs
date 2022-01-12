namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.Auth;

public class LoginModelValidator : AbstractValidator<LoginModel>
{
    public LoginModelValidator()
    {
        RuleFor(loginModel => loginModel.Email).NotNull().EmailAddress();
        RuleFor(LoginModel => LoginModel.Password).NotNull();
    }
}