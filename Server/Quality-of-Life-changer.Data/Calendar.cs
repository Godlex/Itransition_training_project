namespace Quality_of_Life_changer.Data;

public class Calendar
{
    public string Id { get; set; }
    public string CalendarName { get; set; }
    public string OwnerId { get; set; }
    public User Owner { get; set; }
    public string Url { get; set; }
    public DateTime Created { get; set; }
}