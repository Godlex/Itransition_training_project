﻿namespace Quality_of_Life_changer.Model.Calendar;

public class CalendarEvent
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Owner { get; set; }
    public DateTime StartDateTime { get; set; }
    public DateTime EndDateTime { get; set; }
}