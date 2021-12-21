using FluentValidation;
using Quality_of_Life_changer.WebApi.ViewModel.Auth;

namespace Quality_of_Life_changer.WebApi.Validators;

public class RegisterModelValidator : AbstractValidator<RegisterModel>
{
    public RegisterModelValidator()
    {
        RuleFor(registerModel => registerModel.Email).NotNull().EmailAddress();
        RuleFor(registerModel => registerModel.Password).NotNull();
        RuleFor(registerModel => registerModel.ConfirmPassword).NotNull().Equal(customer => customer.Password);
    }
}