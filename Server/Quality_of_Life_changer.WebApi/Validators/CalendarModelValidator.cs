namespace Quality_of_Life_changer.WebApi.Validators;

using FluentValidation;
using Model.UserProfileModel;

public class CalendarModelValidator : AbstractValidator<CalendarModel>
{
    public CalendarModelValidator()
    {
        RuleFor(calendarModel => calendarModel.Name).Length(2, 80);

        RuleFor(calendarModel => calendarModel.Url).NotNull().Matches(@"^.*\.ics");
    }
}