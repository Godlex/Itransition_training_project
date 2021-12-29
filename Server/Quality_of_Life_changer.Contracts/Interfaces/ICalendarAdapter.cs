using Quality_of_Life_changer.Model.Entities;

namespace Quality_of_Life_changer.Contracts.Interfaces;

public interface ICalendarAdapter
{
    public Task<IEnumerable<CalendarEvent>> GetTodayEvents();
}