﻿namespace Quality_of_Life_changer.Data;

public class User
{
    public string Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public ICollection<Calendar> Calendars { get; set; }
}