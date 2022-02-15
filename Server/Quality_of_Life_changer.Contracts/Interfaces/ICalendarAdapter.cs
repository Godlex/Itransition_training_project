namespace Quality_of_Life_changer.Contracts.Interfaces;

using Model.Calendar;

public interface ICalendarAdapter
{
    public Task<IEnumerable<CalendarEvent>> GetTodayEvents();
}