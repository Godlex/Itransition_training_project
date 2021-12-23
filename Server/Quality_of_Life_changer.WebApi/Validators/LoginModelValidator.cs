using FluentValidation;
using Qoality_of_Life_changer.Model.Auth;

namespace Quality_of_Life_changer.WebApi.Validators;

public class LoginModelValidator : AbstractValidator<LoginModel>
{
    public LoginModelValidator()
    {
        RuleFor(loginModel => loginModel.Email).NotNull().EmailAddress();
        RuleFor(LoginModel => LoginModel.Password).NotNull();
    }
}