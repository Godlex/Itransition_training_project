using System.ComponentModel.DataAnnotations;

namespace Qoality_of_Life_changer.Model.Auth;

public class LoginModel
{
    [Required] public string Email { get; set; }

    [Required] public string Password { get; set; }
}