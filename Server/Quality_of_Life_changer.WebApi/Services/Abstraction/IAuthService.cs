using Quality_of_Life_changer.WebApi.ViewModel;

namespace Quality_of_Life_changer.WebApi.Services
{
  
        public interface IAuthService
        {
            string HashPassword(string password);
            bool VerifyPassword(string actualPassword, string hashedPassword);
            AuthData GetAuthData(string id,string userName, string userEmail);
        }
    
}