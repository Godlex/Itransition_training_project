namespace Quality_of_Life_changer.Model.Auth;

using System.ComponentModel.DataAnnotations;

public class RegisterModel
{
    [Required] public string Username { get; set; }

    [Required] [EmailAddress] public string Email { get; set; }

    [Required] public string Password { get; set; }

    [Required] public string ConfirmPassword { get; set; }
}