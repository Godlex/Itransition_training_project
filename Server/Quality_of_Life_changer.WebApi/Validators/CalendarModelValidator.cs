namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.UserProfile;

public class CalendarModelValidator : AbstractValidator<UserCalendar>
{
    public CalendarModelValidator()
    {
        RuleFor(calendarModel => calendarModel.Name).Length(2, 80)
            .When(calendarModel => !string.IsNullOrEmpty(calendarModel.Name))
            .WithMessage("Name must be between 2 and 80 symbols");

        RuleFor(calendarModel => calendarModel.Url).NotEmpty()
            .Matches(@"^.*\.ics$").WithMessage("Url is cannot be empty and end with .ics ");
    }
}