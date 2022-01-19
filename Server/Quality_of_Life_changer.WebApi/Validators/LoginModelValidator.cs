namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.AuthModel;

public class LoginModelValidator : AbstractValidator<LoginModel>
{
    public LoginModelValidator()
    {
        RuleFor(loginModel => loginModel.Email).NotNull().EmailAddress();
        RuleFor(loginModel => loginModel.Password).NotNull();
    }
}