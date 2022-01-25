namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.Auth;

public class RegisterModelValidator : AbstractValidator<RegisterModel>
{
    public RegisterModelValidator()
    {
        RuleFor(registerModel => registerModel.Email).NotEmpty().EmailAddress()
            .WithMessage("Email is required and cannot be empty");
        RuleFor(registerModel => registerModel.Username).NotEmpty().WithMessage("Name is required and cannot be empty");
        RuleFor(registerModel => registerModel.Password).NotEmpty()
            .WithMessage("Password is required and cannot be empty");
        RuleFor(registerModel => registerModel.ConfirmPassword).NotEmpty().Equal(customer => customer.Password)
            .WithMessage("Passwords must match");
        ;
    }
}