namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.AuthModel;

public class RegisterModelValidator : AbstractValidator<RegisterModel>
{
    public RegisterModelValidator()
    {
        RuleFor(registerModel => registerModel.Email).NotNull().EmailAddress();
        RuleFor(registerModel => registerModel.Username).NotNull();
        RuleFor(registerModel => registerModel.Password).NotNull();
        RuleFor(registerModel => registerModel.ConfirmPassword).NotNull().Equal(customer => customer.Password);
    }
}