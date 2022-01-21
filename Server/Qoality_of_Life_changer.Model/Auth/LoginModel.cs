namespace Quality_of_Life_changer.Model.Auth;

using System.ComponentModel.DataAnnotations;

public class LoginModel
{
    [Required] public string Email { get; set; }

    [Required] public string Password { get; set; }
}