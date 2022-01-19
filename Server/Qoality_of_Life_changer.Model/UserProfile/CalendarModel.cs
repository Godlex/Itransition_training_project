namespace Quality_of_Life_changer.Model;

using System.ComponentModel.DataAnnotations;

public class CalendarModel
{
    public string? Name { get; set; }
    [Required] public string Url { get; set; }
}