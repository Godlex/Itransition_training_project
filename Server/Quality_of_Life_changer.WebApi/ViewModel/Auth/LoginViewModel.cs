using System.ComponentModel.DataAnnotations;

namespace Quality_of_Life_changer.WebApi.ViewModel.Auth
{
    public class LoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
