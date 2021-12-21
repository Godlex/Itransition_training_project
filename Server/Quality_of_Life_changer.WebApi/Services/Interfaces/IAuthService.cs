using Microsoft.AspNetCore.Mvc;
using Quality_of_Life_changer.WebApi.ViewModel;
using Quality_of_Life_changer.WebApi.ViewModel.Auth;

namespace Quality_of_Life_changer.WebApi.Services.Abstraction;

public interface IAuthService
{
    bool VerifyPassword(string actualPassword, string hashedPassword);
    AuthData GetAuthData(string id, string userName, string userEmail);
    ActionResult<IEnumerable<UserModel>> GetAllUsers();
}