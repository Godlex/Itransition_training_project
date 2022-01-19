namespace Quality_of_Life_changer.Contracts.Interfaces;

using Model;

public interface ICalendarAdapter
{
    public Task<IEnumerable<CalendarEvent>> GetTodayEvents();
}