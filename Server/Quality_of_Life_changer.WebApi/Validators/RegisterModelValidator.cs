namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.Auth;

public class RegisterModelValidator : AbstractValidator<RegisterModel>
{
    public RegisterModelValidator()
    {
        RuleFor(registerModel => registerModel.Email).NotEmpty().EmailAddress();
        RuleFor(registerModel => registerModel.Username).NotEmpty();
        RuleFor(registerModel => registerModel.Password).NotEmpty();
        RuleFor(registerModel => registerModel.ConfirmPassword).NotEmpty().Equal(customer => customer.Password);
    }
}